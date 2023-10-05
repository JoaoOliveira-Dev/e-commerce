"use client";

import "./login.css";

import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";
import background from "../../assets/background.png";

export default function Login() {
  return (
    <div className="login-box">
      <Link href="/">
        <Image className="logo" src={logo} alt="Logo" />
      </Link>
      {/* <h1>Faça seu login</h1> */}
      <form>
        <div className="email-box">
          <input type="text" placeholder="Email" />
        </div>
        <div className="password-box">
          <input type="password" placeholder="Senha" />
        </div>
        <div className="remember-box">
          <input type="checkbox" />
          <span>Lembrar-me</span>
        </div>
        <div className="box-buttons">
          <button type="submit" className="login-button">
            Entrar
          </button>
          {/* <button className="conta-button">Crie uma conta</button> */}
          <Link href="/registrar" className="conta-button">
            Ainda não possui uma conta ? Registre aqui
          </Link>
        </div>
      </form>
    </div>
  );
}
