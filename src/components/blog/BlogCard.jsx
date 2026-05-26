import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router";
import Badge from "../ui/Badge.jsx";

function BlogCard({ post, category }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-xl shadow-slate-950/30 transition duration-200 hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-violet-950/20">
      <Link
        to={`/blog/${post.id}`}
        className={`grid h-36 place-items-end p-4 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-[#081020] sm:h-40 ${post.imageStyle}`}
        aria-label={`Leer artículo: ${post.title}`}
      >
        <Badge variant="violet">{category?.label ?? "Blog"}</Badge>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            {post.readingTime}
          </span>
        </div>
        <h2 className="mt-4 text-lg font-semibold leading-7 text-white">
          <Link
            to={`/blog/${post.id}`}
            className="rounded-lg transition hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-[#081020]"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
          {post.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${post.id}`}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl text-sm font-semibold text-cyan-300 transition hover:gap-3 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-[#081020]"
        >
          Leer artículo
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
