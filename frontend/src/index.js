import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import DashboardLayout from "./pages/dashboard/dashboardLayout";
import Landing from "./pages/landing";
import Home from "./pages/dashboard/home";
import About from "./pages/dashboard/about";
import Skills from "./pages/dashboard/skills";
import Projects from "./pages/dashboard/projects";
import Contact from "./pages/dashboard/contact";
import Logout from "./pages/dashboard/logout";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard Nested & Private Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
