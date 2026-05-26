import { BrowserRouter, Route, Routes } from "react-router";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import SkillsPage from "../pages/SkillsPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import ExperiencePage from "../pages/ExperiencePage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import BlogDetailPage from "../pages/BlogDetailPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";

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
          <Route path="blog/:postId" element={<BlogDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
