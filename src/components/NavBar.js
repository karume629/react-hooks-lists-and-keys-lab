import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link) => (
        <div key={link}>
          <a href={"#" + link}>{link}</a>
        </div>
      ))}
    </nav>
  );
}

export default NavBar;
