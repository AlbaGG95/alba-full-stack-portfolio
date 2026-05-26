export const SESSION_STORAGE_KEY = "albaPortfolioSession";

export const getStoredSession = () => {
  try {
    const session = localStorage.getItem(SESSION_STORAGE_KEY);

    return session ? JSON.parse(session) : null;
  } catch {
    return null;
  }
};

export const saveSession = (session) => {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_STORAGE_KEY);
};
