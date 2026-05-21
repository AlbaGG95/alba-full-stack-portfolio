const variants = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  pink: "border-pink-300/30 bg-pink-300/10 text-pink-200",
};

function Badge({ children, variant = "cyan" }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export default Badge;
