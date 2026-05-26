import { createContext, useContext, useMemo, useState } from "react";
import { clearSession, getStoredSession, saveSession } from "../utils/storage.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getStoredSession()?.user ?? null);

  const login = ({ email }) => {
    const sessionUser = {
      email,
      role: "admin-demo",
    };

    saveSession({
      user: sessionUser,
      createdAt: new Date().toISOString(),
    });
    setUser(sessionUser);

    return sessionUser;
  };

  const logout = () => {
    clearSession();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
