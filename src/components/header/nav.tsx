import Image from "next/image";
import Link from "next/link";

import { BiUser } from "react-icons/bi";
import { BsCart3, BsSearch } from "react-icons/bs";

import logo from "../../assets/logo.png";
import "./nav.css";
import Button_Search from "../search/button_search";

const Nav = ({ ...props }) => {
  return (
    <nav className="nav-bar" {...props}>
      <ul>
        <li>
          <a href="">
            <Image className="logo" src={logo} alt="Logo" />
          </a>
        </li>
        <li className="search-box">
          <Button_Search />
          <button className="search">
            <BsSearch />
          </button>
        </li>
        <li>
          <a href="" className="card-box">
            <BsCart3 className="cart" />
            Meu Carrinho
          </a>
        </li>
        <li>
          <Link href="/login" className="link">
            <BiUser className="user" />
            <b>Entre</b> ou <b>Cadastre-se</b>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
