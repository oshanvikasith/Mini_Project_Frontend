import React from "react";
import Logo from "../Assests/Logo.png";
import "./style.css";
import { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';

function Menu(props) {
  const [inactive, setInactive] = useState(false);
  const [expand, setExpand] = useState(false);

  useEffect(()=>{
    props.onCollapse(inactive);
  });

  return (
    <div className={`sideMenu-Maindiv ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          <li
            onClick={() => {
              if (inactive) {
                setInactive(false);
              }
            }}
          >
            <NavLink className="menu-item" to="/" exact="true">
              <div className="menu-icon">
                <i class="bi bi-bank"></i>
              </div>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="menu-item" to="/category" exact="true">
              <div className="menu-icon">
                <i class="bi bi-cart4"></i>
              </div>
              <span>Add Category</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="menu-item" to="/view-categories" exact="true">
              <div className="menu-icon">
                <i class="bi bi-clipboard2-data"></i>
              </div>
              <span>View Categories</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="dashboard-info">
          <h5>ESHOP Admin Dasboard</h5>
          <p>Reach Out - eshop@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
