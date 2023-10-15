"use client";

import "./login.css";

import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";
import background from "../../assets/background.png";

import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    const ret = await axios.post("/api/user/login", data, {
      validateStatus: () => true,
    });

    console.log(ret.data);
  }

  return (
    <div className="login-box">
      <Link href="/">
        <Image className="logo" src={logo} alt="Logo" />
      </Link>
      {/* <h1>Faça seu login</h1> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="email-box">
          <input type="text" placeholder="Email" {...register("email")} />
        </div>
        <div className="password-box">
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
        </div>
        <div className="remember-box">
          <input type="checkbox" {...register("checkBox")} />
          <span>Lembrar-me</span>
        </div>
        <div className="box-buttons">
          <button type="submit" className="login-button">
            Entrar
          </button>
          <Link href="/registrar" className="conta-button">
            Ainda não possui uma conta ? Registre aqui
          </Link>
        </div>
      </form>
    </div>
  );
}
