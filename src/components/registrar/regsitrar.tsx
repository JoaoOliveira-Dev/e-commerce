"use client";

import Link from "next/link";
import Image from "next/image";

import { useForm } from "react-hook-form";

import "./registrar.css";
import logo from "../../assets/logo.png";

import axios from "axios";

export default function Registrar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    const res = await axios.post("/api/user/create", data);
  }

  return (
    <main className="login-box">
      <Link href="/">
        <Image className="logo" src={logo} alt="Logo" />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-box">
          <input type="text" placeholder="Nome" {...register("name")} />
        </div>
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
        <div className="confirm-box">
          <input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
        </div>
        <div className="box-buttons">
          <button className="login-button" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
      <Link href="/login" className="back-button">
        Já possui uma conta ? Faça login
      </Link>
    </main>
  );
}
