// Importing required CSS and Bootstrap styling for the NavBar component
import "../Style/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import handleSearch from "../pages/Home";

// Define the NavBar functional component
function NavBar() {
  // useState hook to manage the state of the active link in the navigation bar
  const [activeLink, setActiveLink] = useState("home");

  // Function to handle link click events and update the active link state
  const handleLinkClick = (name: string) => {
    setActiveLink(name);
  };

  // Render the navigation bar
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo section with a clickable link to the homepage */}
              <a href="/" className="logo">
                <h4>
                  <em>Gaming</em> Store
                </h4>
              </a>

              {/* Search input section (currently commented out) */}
              <div className="search-input">
                {/* 
                <form id="search" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    name="searchKeyword"
                  />
                  <i className="fa fa-search"></i>
                </form> 
                */}
              </div>

              {/* Navigation links */}
              <ul className="nav">
                <li>
                  {/* Home link with an "active" class */}
                  <a href="/" className="active" onClick={() => handleLinkClick("home")}>
                    Home
                  </a>
                </li>

                {/* Cart link */}
                <li>
                  <a href="/cart" onClick={() => handleLinkClick("cart")}>
                    Cart
                  </a>
                </li>

                {/* Login link */}
                <li>
                  <a href="/login" onClick={() => handleLinkClick("login")}>
                    Login
                  </a>
                </li>

                {/* Profile link with a placeholder profile image */}
                <li>
                  <a href="/profile" onClick={() => handleLinkClick("profile")}>
                    Profile <img src="src/assets/profile-header.jpg" alt="Profile" />
                  </a>
                </li>
              </ul>

              {/* Menu trigger for smaller screens (mobile view) */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

// Exporting the NavBar component for use in other parts of the application
export default NavBar;
