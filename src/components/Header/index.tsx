"use client";

import Hero from "./Hero";
import NavbarItems from "./NavbarItems";

const Header = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/assets/hero.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
        }}
      >
        <nav className="w-full  ">
          <NavbarItems />
        </nav>
        <Hero />
      </div>
    </div>
  );
};

export default Header;
