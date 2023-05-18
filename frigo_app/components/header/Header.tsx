import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
