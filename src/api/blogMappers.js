const fallbackImageStyles = [
  "bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.26),transparent_34%),radial-gradient(circle_at_75%_70%,rgba(167,139,250,0.24),transparent_34%),#111827]",
  "bg-[radial-gradient(circle_at_24%_24%,rgba(251,113,133,0.28),transparent_34%),radial-gradient(circle_at_76%_70%,rgba(34,211,238,0.18),transparent_34%),#111827]",
  "bg-[radial-gradient(circle_at_28%_24%,rgba(167,139,250,0.28),transparent_35%),radial-gradient(circle_at_72%_72%,rgba(251,113,133,0.22),transparent_34%),#111827]",
]

const allCategory = {
  id: "all",
  label: "Todos",
}

const getCollection = (payload, key) => {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== "object") {
    return []
  }

  if (Array.isArray(payload[key])) {
    return payload[key]
  }

  if (Array.isArray(payload.data)) {
    return payload.data
  }

  if (payload.data && Array.isArray(payload.data[key])) {
    return payload.data[key]
  }

  if (Array.isArray(payload.items)) {
    return payload.items
  }

  if (Array.isArray(payload.results)) {
    return payload.results
  }

  return []
}

const getSingleItem = (payload, key) => {
  if (!payload || typeof payload !== "object") {
    return null
  }

  if (payload[key] && typeof payload[key] === "object") {
    return payload[key]
  }

  if (payload.data && typeof payload.data === "object" && !Array.isArray(payload.data)) {
    return payload.data
  }

  return payload
}

const normalizeText = (value, fallback = "") => {
  if (value === null || value === undefined) {
    return fallback
  }

  return String(value)
}

const normalizeContent = (post, excerpt) => {
  const content = post.content ?? post.contenido ?? post.body ?? excerpt

  if (Array.isArray(content)) {
    return content.map((paragraph) => normalizeText(paragraph)).filter(Boolean)
  }

  return [normalizeText(content, excerpt)].filter(Boolean)
}

const createExcerpt = (post) => {
  const excerpt = post.excerpt ?? post.description ?? post.descripcion ?? post.summary

  if (excerpt) {
    return normalizeText(excerpt)
  }

  const content = post.content ?? post.contenido ?? post.body ?? ""
  const text = Array.isArray(content) ? content.join(" ") : normalizeText(content)

  return text.length > 150 ? `${text.slice(0, 147).trim()}...` : text
}

const formatDate = (value) => {
  if (!value) {
    return "Sin fecha"
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return normalizeText(value)
  }

  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

const getReadingTime = (post, content) => {
  const readingTime = post.readingTime ?? post.reading_time ?? post.readingTimeText

  if (readingTime) {
    return normalizeText(readingTime)
  }

  const words = content.join(" ").trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))

  return `${minutes} min`
}

const getCategoryId = (post) => {
  if (post.category && typeof post.category === "object") {
    return normalizeText(post.category.id ?? post.category.category_id ?? post.category.categoryId, "blog")
  }

  return normalizeText(post.category_id ?? post.categoryId ?? post.category ?? "blog")
}

const getCategoryName = (post, categoryId, categories) => {
  if (post.category && typeof post.category === "object") {
    return normalizeText(
      post.category.label ?? post.category.name ?? post.category.nombre ?? post.category.title ?? post.category.titulo,
      "Blog",
    )
  }

  return categories.find((category) => category.id === categoryId)?.label ?? "Blog"
}

const normalizeTags = (post, categoryName) => {
  if (Array.isArray(post.tags)) {
    return post.tags.map((tag) => normalizeText(tag)).filter(Boolean)
  }

  if (typeof post.tags === "string") {
    return post.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
  }

  return [categoryName]
}

export const normalizeCategory = (category, index = 0) => {
  if (typeof category === "string") {
    return {
      id: category,
      label: category,
    }
  }

  const id = normalizeText(
    category.id ?? category.category_id ?? category.categoryId ?? category.slug,
    `category-${index + 1}`,
  )

  return {
    id,
    label: normalizeText(category.label ?? category.name ?? category.nombre ?? category.title ?? category.titulo, id),
  }
}

export const normalizeCategories = (payload) => {
  const categories = getCollection(payload, "categories")
    .map((category, index) => normalizeCategory(category, index))
    .filter((category) => category.id !== "all")

  return [allCategory, ...categories]
}

export const normalizePost = (payload, categories = [], index = 0) => {
  const post = getSingleItem(payload, "post")

  if (!post) {
    return null
  }

  const id = normalizeText(post.id ?? post.slug, `post-${index + 1}`)
  const title = normalizeText(post.title ?? post.titulo, "Artículo sin título")
  const excerpt = createExcerpt(post) || "Artículo técnico del blog."
  const content = normalizeContent(post, excerpt)
  const categoryId = getCategoryId(post)
  const categoryName = getCategoryName(post, categoryId, categories)

  return {
    id,
    title,
    excerpt,
    content,
    categoryId,
    categoryName,
    tags: normalizeTags(post, categoryName),
    date: formatDate(post.created_at ?? post.createdAt ?? post.date ?? post.fecha),
    readingTime: getReadingTime(post, content),
    featured: Boolean(post.featured ?? post.destacado),
    imageStyle: post.imageStyle ?? post.gradient ?? fallbackImageStyles[index % fallbackImageStyles.length],
  }
}

export const normalizePosts = (payload, categories = []) =>
  getCollection(payload, "posts")
    .map((post, index) => normalizePost(post, categories, index))
    .filter(Boolean)
