import { BrowserRouter, Route, Routes } from "react-router";
import AdminLayout from "../components/admin/AdminLayout.jsx";
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
import ManagePostsPage from "../pages/ManagePostsPage.jsx";
import ManageCategoriesPage from "../pages/ManageCategoriesPage.jsx";

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
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminPage />} />
            <Route path="posts" element={<ManagePostsPage />} />
            <Route path="categories" element={<ManageCategoriesPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
