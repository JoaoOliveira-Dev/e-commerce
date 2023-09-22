"use client";

import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function pedro() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const res = await axios.post("/api/user", data);
  }

  return (
    <main>
      <form
        style={{ display: "flex", flexDirection: "column", padding: "5px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="nome"
          sx={{ width: "350px", margin: "5px" }}
          size="small"
          {...register("name")}
        />
        <TextField
          label="email"
          sx={{ width: "350px", margin: "5px" }}
          size="small"
          {...register("email")}
        />
        <TextField
          label="senha"
          type="password"
          sx={{ width: "350px", margin: "5px" }}
          size="small"
          {...register("password")}
        />
        <Button type="submit" sx={{ width: "350px", margin: "5px" }}>
          Enviar
        </Button>
      </form>
    </main>
  );
}
