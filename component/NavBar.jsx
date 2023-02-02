import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo        ">
        <Link href="/">SHOES</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">2</span>
      </button>
    </div>
  );
};

export default NavBar;
