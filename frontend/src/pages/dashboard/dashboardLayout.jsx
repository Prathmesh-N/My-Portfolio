import { Outlet, Link, NavLink } from "react-router-dom";
import "../styles/dashboardLayout.css";
import Footer from "../dashboard/Footer";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <nav className="navbar navbar-expand-lg dashboard-navbar">
        <div className="container-fluid dashboard-nav-inner">
          <Link className="navbar-brand dashboard-brand" to="">
            MyPortfolio
          </Link>
          <button
            className="navbar-toggler dashboard-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse dashboard-collapse" id="navbarNav">
            <ul className="navbar-nav dashboard-nav-links">
              <li className="nav-item">
                <NavLink className="nav-link dashboard-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dashboard-link" to="skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dashboard-link" to="projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dashboard-link" to="contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link dashboard-link logout-link" to="logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Child Routes Render Here */}
      <main className="dashboard-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
