import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function PublicLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#081020] text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_22%_8%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_76%_18%,rgba(167,139,250,0.16),transparent_28%),radial-gradient(circle_at_78%_82%,rgba(251,113,133,0.12),transparent_30%)]"></div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
