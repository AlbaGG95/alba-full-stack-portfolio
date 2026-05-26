import { useMemo, useState } from "react";
import { FileText, Search } from "lucide-react";
import BlogCard from "../components/blog/BlogCard.jsx";
import BlogCategoryFilter from "../components/blog/BlogCategoryFilter.jsx";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { blogCategories } from "../data/blogCategories.js";
import { blogPosts } from "../data/blogPosts.js";

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryMap = useMemo(
    () =>
      blogCategories.reduce((categories, category) => {
        categories[category.id] = category;
        return categories;
      }, {}),
    [],
  );

  const filteredPosts = blogPosts.filter((post) => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchesCategory =
      activeCategory === "all" || post.categoryId === activeCategory;
    const matchesSearch =
      normalizedSearch.length === 0 ||
      post.title.toLowerCase().includes(normalizedSearch) ||
      post.excerpt.toLowerCase().includes(normalizedSearch) ||
      post.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="px-5 py-14 lg:px-8 lg:py-16">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge variant="violet">Blog técnico</Badge>
            <SectionHeader
              title="Notas sobre React, Full Stack, diseño UI y producto"
              description="Artículos mock para explicar decisiones, aprendizajes y procesos reales del portfolio antes de conectar la API del bootcamp."
            />
          </div>
          <label className="flex w-full items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-400 shadow-lg shadow-slate-950/20 transition focus-within:border-cyan-300/60 focus-within:ring-2 focus-within:ring-cyan-300/20 lg:w-96">
            <Search size={16} className="text-slate-500" />
            <span className="sr-only">Buscar artículos</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar por título, resumen o tag..."
              className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-8">
          <BlogCategoryFilter
            categories={blogCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {filteredPosts.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                category={categoryMap[post.categoryId]}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-8 text-center shadow-xl shadow-slate-950/20">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-violet-300/30 bg-violet-300/10 text-violet-200">
              <FileText size={22} />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">
              No hay artículos para esta búsqueda
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Prueba con otra categoría o busca por React, Full Stack, Figma,
              API REST o Tailwind CSS.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default BlogPage;
