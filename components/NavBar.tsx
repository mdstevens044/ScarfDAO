import React from "react";

function NavBar() {
  return (
    <nav className="flex-1 pb-3 mt-4 pr-4 md:pr-8 text-right">
      <a className="underline text-black active:text-black visited:text-black" href="https://asknoot.substack.com/"  target="_blank" rel="noopener noreferrer">Substack</a>
    </nav>
  );
}

export default NavBar;