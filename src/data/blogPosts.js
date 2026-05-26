export const blogPosts = [
  {
    id: "estructuro-proyectos-react",
    title: "Cómo estructuro mis proyectos React",
    excerpt:
      "Una guía práctica sobre cómo organizo rutas, componentes, datos y estilos para que un proyecto React sea fácil de mantener.",
    content: [
      "Cuando empiezo un proyecto React intento separar desde el principio las responsabilidades principales: rutas, páginas, componentes reutilizables, datos locales y estilos. Esta estructura me ayuda a avanzar por fases sin mezclar decisiones de UI con lógica de datos.",
      "En un portfolio profesional, la arquitectura no tiene que ser compleja para ser buena. Lo importante es que cada carpeta tenga una intención clara y que cualquier cambio futuro pueda localizarse rápido.",
      "También intento que los componentes reciban datos por props, que las páginas compongan secciones y que la lógica local, como filtros o búsquedas, se mantenga cerca de la interfaz que la usa.",
    ],
    categoryId: "react",
    tags: ["React", "Arquitectura", "Componentes"],
    date: "12 mayo 2026",
    readingTime: "6 min",
    featured: true,
    imageStyle:
      "bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.26),transparent_34%),radial-gradient(circle_at_75%_70%,rgba(167,139,250,0.24),transparent_34%),#111827]",
  },
  {
    id: "the-omen-frontend-full-stack",
    title: "De frontend a full stack: evolución de The Omen",
    excerpt:
      "Cómo un videoclub de terror en React evolucionó hacia una aplicación con backend Java, Spring Boot, MySQL y API REST.",
    content: [
      "The Omen empezó como una experiencia frontend de terror cinematográfico, con React, Tailwind CSS, React Router y una interfaz pensada para crear ambiente desde la landing hasta el catálogo.",
      "La evolución natural fue llevar el proyecto a una capa full stack. Añadir Java, Spring Boot y MySQL permitió convertir el catálogo en una aplicación con CRUD real y una API REST para gestionar películas.",
      "Este proceso me ayudó a entender mejor la relación entre una interfaz cuidada, los datos que consume y la importancia de diseñar contratos claros entre frontend y backend.",
    ],
    categoryId: "full-stack",
    tags: ["React", "Spring Boot", "MySQL", "API REST"],
    date: "14 mayo 2026",
    readingTime: "7 min",
    featured: true,
    imageStyle:
      "bg-[radial-gradient(circle_at_24%_24%,rgba(251,113,133,0.28),transparent_34%),radial-gradient(circle_at_76%_70%,rgba(34,211,238,0.18),transparent_34%),#111827]",
  },
  {
    id: "ultima-puerta-home-dashboard-mobile",
    title: "Qué aprendí separando Home, Dashboard y Mobile en La Última Puerta",
    excerpt:
      "Una reflexión sobre producto, arquitectura frontend y experiencia de usuario al dividir una plataforma en contextos distintos.",
    content: [
      "La Última Puerta me obligó a pensar el proyecto como una plataforma, no como una única pantalla. La Home pública, el Dashboard interno y la experiencia mobile para visitantes tienen objetivos, usuarios y densidad visual diferentes.",
      "Separar estos contextos ayuda a tomar mejores decisiones: la Home vende la experiencia, el Dashboard prioriza gestión y claridad, y el mobile necesita acciones directas y lectura rápida.",
      "Esta división también mejora la arquitectura del frontend, porque permite que rutas, componentes y servicios se organicen según necesidades reales de producto.",
    ],
    categoryId: "full-stack",
    tags: ["Producto", "React Router", "Mobile-first"],
    date: "16 mayo 2026",
    readingTime: "6 min",
    featured: true,
    imageStyle:
      "bg-[radial-gradient(circle_at_28%_24%,rgba(167,139,250,0.28),transparent_35%),radial-gradient(circle_at_72%_72%,rgba(251,113,133,0.22),transparent_34%),#111827]",
  },
  {
    id: "figma-antes-de-programar",
    title: "Diseño UI en Figma antes de programar",
    excerpt:
      "Por qué uso Figma para ordenar jerarquía, ritmo visual, componentes y decisiones de producto antes de escribir JSX.",
    content: [
      "Diseñar en Figma antes de programar me ayuda a resolver problemas de jerarquía visual sin estar condicionada por el código. Puedo probar composiciones, espaciados, estados y componentes con más rapidez.",
      "Después, al pasar a React y Tailwind CSS, el desarrollo es más claro porque ya existe una dirección visual. No se trata de copiar píxeles, sino de respetar intención, estructura y consistencia.",
      "Este flujo conecta diseño UI, criterio de producto y desarrollo frontend, que es una parte importante de cómo quiero posicionar mi portfolio.",
    ],
    categoryId: "ui-design",
    tags: ["Figma", "UI/UX", "Tailwind CSS"],
    date: "18 mayo 2026",
    readingTime: "5 min",
    featured: false,
    imageStyle:
      "bg-[radial-gradient(circle_at_30%_24%,rgba(251,113,133,0.26),transparent_34%),radial-gradient(circle_at_72%_72%,rgba(167,139,250,0.24),transparent_34%),#111827]",
  },
  {
    id: "componentes-reutilizables",
    title: "Buenas prácticas con componentes reutilizables",
    excerpt:
      "Cómo decido cuándo extraer un componente, qué props usar y cómo evitar sobreingeniería en proyectos de bootcamp.",
    content: [
      "Un componente reutilizable debe resolver una repetición real, no una posibilidad futura. Primero observo si el mismo patrón aparece varias veces y después extraigo una versión simple con props claras.",
      "En React intento que los componentes de UI sean pequeños y predecibles. Un botón, una card o un badge deben encargarse de su presentación y permitir que la página controle el contenido.",
      "Esta forma de trabajar mantiene el código entendible para una evaluación de bootcamp, pero también lo acerca a una forma profesional de construir interfaces.",
    ],
    categoryId: "frontend",
    tags: ["Componentes", "Props", "Frontend"],
    date: "19 mayo 2026",
    readingTime: "6 min",
    featured: false,
    imageStyle:
      "bg-[radial-gradient(circle_at_24%_28%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_76%_68%,rgba(251,113,133,0.22),transparent_34%),#111827]",
  },
  {
    id: "organizo-proyecto-full-stack",
    title: "Cómo organizo un proyecto Full Stack",
    excerpt:
      "Una visión práctica para separar frontend, backend, documentación, API REST y flujo de ramas sin perder claridad.",
    content: [
      "En un proyecto Full Stack intento que cada capa tenga una responsabilidad clara. El frontend se centra en la experiencia, el backend en reglas, datos y endpoints, y la documentación conecta las decisiones importantes.",
      "Trabajar con React, Spring Boot, MySQL y API REST exige cuidar el contrato entre ambas partes. Si los datos, rutas y errores están bien definidos, la integración se vuelve mucho más estable.",
      "También es importante trabajar con ramas, commits claros y tareas pequeñas. Ese flujo ayuda a presentar el proyecto como un producto defendible, no solo como una entrega técnica.",
    ],
    categoryId: "backend",
    tags: ["Full Stack", "Java", "API REST"],
    date: "20 mayo 2026",
    readingTime: "7 min",
    featured: false,
    imageStyle:
      "bg-[radial-gradient(circle_at_26%_22%,rgba(167,139,250,0.24),transparent_34%),radial-gradient(circle_at_76%_76%,rgba(34,211,238,0.20),transparent_34%),#111827]",
  },
  {
    id: "tailwind-interfaces-limpias",
    title: "Tailwind CSS para interfaces limpias",
    excerpt:
      "Cómo uso Tailwind CSS para mantener consistencia visual, responsive design y una estética premium sin CSS tradicional innecesario.",
    content: [
      "Tailwind CSS me permite construir interfaces rápidas sin perder control visual. Las utilidades hacen visible el sistema de espaciado, color, bordes y responsive directamente en el componente.",
      "Para que una interfaz no parezca genérica, intento repetir patrones: fondos oscuros, bordes sutiles, estados hover claros, textos con jerarquía y acentos de color controlados.",
      "La clave no es usar muchas clases, sino usarlas con criterio para que cada sección se sienta parte del mismo sistema visual.",
    ],
    categoryId: "learning",
    tags: ["Tailwind CSS", "Responsive", "UI"],
    date: "21 mayo 2026",
    readingTime: "5 min",
    featured: true,
    imageStyle:
      "bg-[radial-gradient(circle_at_24%_22%,rgba(34,211,238,0.28),transparent_34%),radial-gradient(circle_at_72%_74%,rgba(251,113,133,0.20),transparent_34%),#111827]",
  },
];
