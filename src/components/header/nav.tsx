import "./nav.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { BiUser } from "react-icons/bi";
import { BsCart3, BsSearch } from "react-icons/bs";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">
            <Image className="logo" src={logo} alt="Logo" />
          </a>
        </li>
        <li className="search-box">
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
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
          <a href="">
            <BiUser className="user" />
            <b>Entre</b> ou <b>Cadastre-se</b>
          </a>
        </li>
      </ul>
    </nav>
  );
}
