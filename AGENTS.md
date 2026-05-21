# AGENTS.md

## Purpose

This file is the operating guide for AI agents working on **Alba Full Stack Portfolio**.

The goal is to keep every contribution aligned with the product, the bootcamp requirements, the current phase, and a professional frontend workflow. Follow this file before making any code change.

## Project Summary

**Alba Full Stack Portfolio** is a frontend-only React application for the EuroFilms Front/React/JS bootcamp.

It is a professional Full Stack portfolio with an integrated technical blog and, in later phases, a private admin area for managing blog posts and categories through the bootcamp API.

The app must demonstrate:

- React and JavaScript fundamentals.
- Clean component architecture.
- React Router usage.
- API consumption.
- CRUD operations.
- Authentication flow.
- State management with React primitives.
- Responsive, accessible, professional UI.
- A portfolio experience suitable for real professional use.

## Current Stack

- React.
- JavaScript.
- Vite.
- Tailwind CSS.
- React Router.
- lucide-react.

Do not migrate to TypeScript unless explicitly requested.

Do not add UI frameworks or state libraries unless explicitly requested and justified by the current task.

## Hard Rules

- Never work directly on `main`.
- Use `dev` as the integration branch.
- Use feature branches from `dev`.
- Do not commit automatically.
- Do not create a backend.
- Do not hardcode secrets, API keys, tokens, credentials, or private URLs.
- Do not invent API endpoints.
- Do not add dependencies unless they are required for the current task.
- Do not implement future phases unless the user explicitly asks for them.
- Do not delete important repository files such as `.git`, `LICENSE`, `README.md`, documentation, or configuration files.
- Do not rewrite unrelated code.
- Do not add comments inside source code unless the user explicitly asks for them.
- Keep code simple enough to explain in a bootcamp evaluation, but professional enough for a real portfolio.

## Required Startup Checklist

Before every task, run or inspect:

```bash
git status
git branch --show-current
ls
```

Then read this file.

If the current branch is `main`, create or switch to `dev`, then create a feature branch from `dev`.

Recommended branch naming:

- `feature/project-base`
- `feature/routing-layout`
- `feature/portfolio-pages`
- `feature/mock-data`
- `feature/api-services`
- `feature/blog-api`
- `feature/category-filter`
- `feature/admin-dashboard`
- `feature/admin-posts-crud`
- `feature/admin-categories-crud`
- `feature/auth-context`
- `feature/protected-routes`
- `feature/responsive-polish`
- `feature/readme`
- `fix/api-error-handling`
- `fix/router-navigation`
- `refactor/component-structure`

## Development Method

Work in small, phase-aligned steps.

Before editing files:

1. Inspect the current implementation.
2. Identify the files involved.
3. Explain the intended change briefly.
4. Apply only the requested change.
5. Validate the result.
6. Report modified files and validation output.

If unrelated user changes are present, do not revert them. Work around them unless they block the task.

If a task is ambiguous, choose the smallest implementation that satisfies the request and respects the current phase.

## Product Scope

### Public Area

The final app should include:

- Home.
- About.
- Skills.
- Projects.
- Experience.
- Blog.
- Blog detail.
- Contact or CV.

### Private Area

The final app should include:

- Login.
- Admin dashboard.
- Manage posts.
- Manage categories.

Do not create these areas before their phase is requested.

## Data Rules

Use local frontend data for:

- Projects.
- Skills.
- Experience.
- About content.
- Contact and CV information.
- Design and Figma-related portfolio content.

Use the bootcamp API only for:

- Blog posts.
- Categories.
- CRUD for posts.
- CRUD for categories.

Expected environment variables:

```bash
VITE_API_BASE_URL=
VITE_API_KEY=
```

Keep real values out of Git. Use `.env.example` for placeholders only.

## API Contract

The bootcamp API follows this pattern:

```txt
/api/:api_key

GET    /categories
GET    /categories/:id
POST   /categories
PUT    /categories/:id
DELETE /categories/:id

GET    /posts
GET    /posts?category_id=
GET    /posts?page=
GET    /posts/:id
POST   /posts
PUT    /posts/:id
DELETE /posts/:id
```

Centralize API communication in `src/api`.

Recommended files when the API phase is requested:

```txt
src/api/apiClient.js
src/api/postService.js
src/api/categoryService.js
```

Components and pages must not build raw API URLs or scatter `fetch` calls across the UI.

The API layer should handle:

- Base URL.
- API key.
- HTTP methods.
- Headers.
- JSON parsing.
- Basic error handling.

If the response shape is unclear, write adaptable code and document assumptions in the task response, not as source comments.

## Routing Rules

Use React Router when the routing phase is requested.

Recommended public routes:

```txt
/
/about
/skills
/projects
/experience
/blog
/blog/:postId
/contact
/login
```

Recommended private routes:

```txt
/admin
/admin/posts
/admin/categories
```

Keep routing centralized.

Recommended files when the routing phase is requested:

```txt
src/router/AppRouter.jsx
src/router/ProtectedRoute.jsx
```

Do not create protected routes before authentication exists unless the task explicitly asks for route scaffolding only.

## Authentication Rules

Authentication is frontend-only unless the bootcamp API provides a real login endpoint.

If no real login endpoint exists, implement a clearly separated simulated login flow.

Recommended file when the auth phase is requested:

```txt
src/context/AuthContext.jsx
```

Use either `localStorage` or `sessionStorage`, not both, unless there is a clear reason.

Never store real credentials.

## Code Style

Use English names for files, components, variables, functions, services, constants, and routes.

Naming conventions:

- Components: `PascalCase`.
- Functions: `camelCase`.
- Variables: `camelCase`.
- React component files: `PascalCase.jsx`.
- Service files: `camelCase.js`.
- Constants: `UPPER_CASE` only when truly constant and shared.

React rules:

- Use functional components.
- Prefer props for explicit data flow.
- Use `useState` for local state.
- Use `useEffect` for side effects.
- Use `useContext` only when shared state is genuinely needed.
- Keep components focused and readable.
- Extract reusable components when repetition appears.
- Do not mix API logic, routing logic, and layout concerns in the same component.

Avoid:

- Large components.
- Premature abstractions.
- Complex custom hooks without clear value.
- Global state for local concerns.
- Repeated JSX blocks.
- Business logic buried in markup.

## Styling Rules

Tailwind CSS is the styling foundation.

For the current setup, `src/index.css` should stay minimal:

```css
@import "tailwindcss";
```

Do not add traditional handcrafted CSS unless a later task explicitly requires a narrowly scoped exception.

Use semantic HTML and Tailwind utility classes.

The visual direction should be:

- Modern.
- Clean.
- Professional.
- Responsive.
- Accessible.
- Design-aware.
- Suitable for a Full Stack developer portfolio.

Use `lucide-react` for icons when icons are needed.

Do not add component libraries unless explicitly requested.

If a visual reference is relevant to the task, inspect files under `docs/visual`.

## Suggested Future Structure

This is the target direction, not something to create all at once:

```txt
src/
  api/
    apiClient.js
    categoryService.js
    postService.js
  components/
    admin/
    blog/
    layout/
    portfolio/
    ui/
  context/
    AuthContext.jsx
  data/
    experience.js
    projects.js
    skills.js
  pages/
    AboutPage.jsx
    AdminPage.jsx
    BlogDetailPage.jsx
    BlogPage.jsx
    ContactPage.jsx
    ExperiencePage.jsx
    HomePage.jsx
    LoginPage.jsx
    ManageCategoriesPage.jsx
    ManagePostsPage.jsx
    ProjectsPage.jsx
    SkillsPage.jsx
  router/
    AppRouter.jsx
    ProtectedRoute.jsx
  utils/
    storage.js
  App.jsx
  main.jsx
```

Create folders and files progressively when their phase requires them.

## Development Phases

### Phase 0: Project Base

- Repository setup.
- Vite React initialization.
- Tailwind configuration.
- Minimal app screen.
- Environment example.
- Build validation.

No routes, pages, API, CRUD, auth, or final architecture.

### Phase 1: Static Base

- App layout.
- Centralized router.
- Public page placeholders.
- Basic responsive structure.
- Navigation.

No API, CRUD, or auth.

### Phase 2: Local Portfolio Data

- Local data files.
- Projects.
- Skills.
- Experience.
- About/profile content.
- Static rendering.

### Phase 3: Blog Mock Data

- Mock posts.
- Mock categories.
- Blog list.
- Category filter.
- Blog detail.

No API calls yet unless explicitly requested.

### Phase 4: API Services

- API client.
- Post service.
- Category service.
- Environment variable usage.
- Error handling utilities.

### Phase 5: Blog API Reading

- Load posts from API.
- Load categories from API.
- Loading, error, and empty states.
- Category filtering from real data.

### Phase 6: Admin CRUD

- Admin dashboard.
- Manage posts.
- Manage categories.
- Create, edit, delete flows.
- Form validation.
- Refresh state after mutations.

### Phase 7: Authentication

- Auth context.
- Login and logout.
- Protected routes.
- Session persistence.

### Phase 8: Polish and Documentation

- Responsive refinements.
- Accessibility pass.
- Visual consistency.
- README.
- Final validation.

Do not move to the next phase without user confirmation.

## Validation

Run the smallest validation set that matches the task.

Common commands:

```bash
npm install
npm run build
npm run lint
git status
```

Run `npm run lint` only if a lint script exists.

For UI changes, also validate manually with:

```bash
npm run dev
```

Manual validation should check:

- App loads.
- No critical browser console errors.
- Layout works on mobile and desktop.
- Navigation works when routing exists.
- Data renders when data features exist.
- API errors are handled when API features exist.
- CRUD works when CRUD features exist.
- Protected routes work when auth exists.

## Definition of Done

A task is complete only when:

- The requested scope is implemented.
- The change is limited to the current task.
- The build passes.
- Lint passes if lint exists.
- Manual validation is possible.
- Modified files are listed.
- Important decisions are explained briefly.
- A Conventional Commit message is suggested.
- No commit is created unless the user explicitly requests it.

## Commit Guidance

Use Conventional Commits.

Allowed types:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `test`
- `chore`

Examples:

```txt
chore: initialize react vite project with tailwind
feat: create base routing structure
feat: add public portfolio pages
feat: render local portfolio data
feat: create api service layer
feat: connect blog posts to api
feat: add category filter
feat: add admin posts crud
feat: add admin categories crud
feat: add authentication context
feat: protect admin routes
style: polish responsive layout
docs: add project readme
fix: handle empty posts response
fix: handle api error state
refactor: simplify blog components
```

## Agent Response Format

For implementation tasks, respond with:

1. Task summary.
2. Current branch.
3. Files created or modified.
4. Important decisions.
5. Validation performed.
6. Git status summary.
7. Manual validation steps.
8. Suggested commit message.

Keep responses concise. Do not repeat the entire project context unless it is necessary.

## Forbidden Actions

Do not:

- Work on `main`.
- Create backend code.
- Add hidden credentials.
- Add unnecessary packages.
- Generate the full final architecture before it is needed.
- Mix unrelated phases.
- Skip validation.
- Change unrelated files.
- Revert user changes.
- Commit without explicit user approval.
- Continue to a new phase without user confirmation.

