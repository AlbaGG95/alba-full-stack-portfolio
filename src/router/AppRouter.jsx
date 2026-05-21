import { BrowserRouter, Route, Routes } from "react-router";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import SkillsPage from "../pages/SkillsPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import ExperiencePage from "../pages/ExperiencePage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
