function BlogCategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <button
            key={category.id}
            type="button"
            className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-[#081020] ${
              isActive
                ? "border-cyan-300 bg-cyan-300 text-[#081020] shadow-lg shadow-cyan-950/30"
                : "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200"
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

export default BlogCategoryFilter;
