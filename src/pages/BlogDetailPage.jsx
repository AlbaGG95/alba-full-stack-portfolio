import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, Clock, FolderOpen } from "lucide-react";
import { Link, useParams } from "react-router";
import { normalizePost } from "../api/blogMappers.js";
import { getPostById } from "../api/postService.js";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import { blogCategories } from "../data/blogCategories.js";
import { blogPosts } from "../data/blogPosts.js";

function BlogDetailPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  const fallbackPost = useMemo(
    () => blogPosts.find((blogPost) => blogPost.id === postId) ?? null,
    [postId],
  );

  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      try {
        setIsLoading(true);
        setApiError(null);

        const response = await getPostById(postId);
        const normalizedPost = normalizePost(response, blogCategories);

        if (isMounted) {
          setPost(normalizedPost ?? fallbackPost);
        }
      } catch (error) {
        if (isMounted) {
          setApiError(error);
          setPost(fallbackPost);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [fallbackPost, postId]);

  const category = post
    ? blogCategories.find((blogCategory) => blogCategory.id === post.categoryId) ?? {
        label: post.categoryName,
      }
    : null;

  if (isLoading) {
    return (
      <main className="px-5 py-14 lg:px-8 lg:py-16">
        <section className="mx-auto max-w-3xl rounded-2xl border border-slate-700/70 bg-slate-900/70 p-8 text-center shadow-xl shadow-slate-950/30">
          <Badge variant="violet">Blog técnico</Badge>
          <h1 className="mt-5 text-3xl font-semibold text-white">
            Cargando artículos...
          </h1>
        </section>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="px-5 py-14 lg:px-8 lg:py-16">
        <section className="mx-auto max-w-3xl rounded-2xl border border-slate-700/70 bg-slate-900/70 p-8 text-center shadow-xl shadow-slate-950/30">
          <Badge variant="pink">Artículo no encontrado</Badge>
          <h1 className="mt-5 text-3xl font-semibold text-white">
            Este artículo no existe
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Puede que el contenido se añada en una fase posterior o que la ruta
            no coincida con un artículo disponible.
          </p>
          {apiError ? (
            <p className="mt-4 text-sm leading-6 text-pink-100">
              No se pudieron cargar los artículos desde la API.
            </p>
          ) : null}
          <div className="mt-7 flex justify-center">
            <Button to="/blog" variant="secondary" icon={ArrowLeft}>
              Volver al blog
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="px-5 py-14 lg:px-8 lg:py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-xl text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-[#081020]"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        {apiError ? (
          <div className="mt-6 rounded-2xl border border-pink-300/20 bg-pink-300/10 px-5 py-4 text-sm leading-6 text-pink-100">
            No se pudieron cargar los artículos desde la API. Mostrando
            contenido local de respaldo.
          </div>
        ) : null}

        <header className="mt-8 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 shadow-2xl shadow-slate-950/30">
          <div className={`h-56 p-6 sm:h-72 ${post.imageStyle}`}>
            <Badge variant="violet">{category?.label ?? "Blog"}</Badge>
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={16} />
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <FolderOpen size={16} />
                {category?.label ?? "Blog"}
              </span>
            </div>
            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/20 sm:p-8">
          <div className="space-y-5 text-base leading-8 text-slate-300">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <footer className="mt-8 flex flex-col gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Sigue explorando el portfolio
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Revisa otros artículos o conecta este aprendizaje con los
              proyectos públicos.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/blog" variant="secondary" icon={ArrowLeft}>
              Ver blog
            </Button>
            <Button to="/projects" icon={ArrowRight}>
              Ver proyectos
            </Button>
          </div>
        </footer>
      </article>
    </main>
  );
}

export default BlogDetailPage;
