import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Role } from "../../Utils/roles";
import "./SidePanel.css";

const SidePanel = ({ userRole }) => {
  const navigate = useNavigate();

  const navLinks = [
    {
      path: "/layout/dashboard",
      label: "Leaderboard",
      roles: [Role.CENTRAL_OPS, Role.CITY_MANAGER, Role.STORE_MANAGER, Role.EMPLOYEE],
    },
    {
      path: "/layout/control-unit",
      label: "Control Unit",
      roles: [Role.CENTRAL_OPS, Role.CITY_MANAGER],
    },
    {
      path: "/layout/winners",
      label: "Winners",
      roles: [Role.CENTRAL_OPS, Role.CITY_MANAGER, Role.STORE_MANAGER, Role.EMPLOYEE],
    },
    {
      path: "/layout/store-details",
      label: "Store Details",
      roles: [Role.STORE_MANAGER],
    },
    {
        path: "/layout/case-studies",
        label: "Case Studies",
        roles: [Role.CENTRAL_OPS, Role.CITY_MANAGER, Role.STORE_MANAGER, Role.EMPLOYEE],
      },
  ];

  React.useEffect(() => {
    // Redirect to the "Dashboard" tab by default if not already on a specific path
    if (window.location.pathname === "/layout") {
      navigate("/layout/dashboard");
    }
  }, [navigate]);

  return (
    <div className="side-panel">
      <div>
        <h2>STORE WARS</h2>
        <div>
          <nav>
            <ul>
              {navLinks
                .filter((link) => link.roles.includes(userRole))
                .map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? "active-link" : "inactive-link"
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{
            position: "absolute",
            bottom: "25px",
            left: "35px",
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
