import { Link } from "react-router";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#081020]";

const variants = {
  primary:
    "bg-cyan-300 text-[#081020] shadow-lg shadow-cyan-950/30 hover:bg-cyan-200 hover:shadow-cyan-900/40",
  secondary:
    "border border-violet-400/40 bg-slate-950/50 text-slate-100 hover:border-cyan-300/60 hover:bg-slate-900/70 hover:text-cyan-300",
};

function Button({ children, to, variant = "primary", icon: Icon }) {
  const className = `${baseClasses} ${variants[variant]}`;
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon size={16} /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {content}
    </button>
  );
}

export default Button;
