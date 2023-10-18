"use client";

import "./login.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import logo from "../../assets/logo.png";
import background from "../../assets/background.png";

import axios from "axios";
import CheckBox from "../checkbox/checkbox";
import { useState } from "react";

export default function Login() {
  const [isChecked, setIsChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const ret = await axios.post(
      "/api/user/login",
      { email: email, password: password, isChecked: isChecked },
      {
        validateStatus: () => true,
      }
    );

    if (ret.status === 200) {
      push("/");
    }
  };

  return (
    <div className="login-box">
      <Link href="/">
        <Image className="logo" src={logo} alt="Logo" />
      </Link>
      {/* <h1>Faça seu login</h1> */}
      <form onSubmit={onSubmit}>
        <div className="email-box">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="password-box">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="remember-box">
          {/* <input type="checkbox" {...register("checkBox")} /> */}
          <CheckBox onChange={() => setIsChecked(!isChecked)} />
          <span>Lembrar-me {isChecked ? "true" : "false"}</span>
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
