import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="shadow">
      <div className="flex-1 pb-3 mt-4 pr-4 md:pr-8">
        <ul className="items-end justify-end">
          <li className="text-right">
            <a className="underline text-black" href="https://asknoot.substack.com/"  target="_blank" rel="noopener noreferrer">Substack</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;