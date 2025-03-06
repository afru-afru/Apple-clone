import "./header.css";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu and Close icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-wrapper">
      <div className="internal-wrapper">
        <div className="header-links-wrapper">
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li className="logo-link"><a href="/"><FaApple /></a></li>
            <li><a href="/mac/">Store</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Support</a></li>
            <li className="search-link"><a href="/search/"><CiSearch /></a></li>
            <li className="cart-link"><a href="/cart/"><LiaLuggageCartSolid /></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;