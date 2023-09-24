"use client";

import { TextField, Button, Alert } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório!!")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("O email é obrigatório!!")
    .toLowerCase()
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@hotmail.com");
    }, 'O email deve terminar com "@gmail.com'),
  password: z.string().nonempty("A senha é obrigatória!!").min(6),
});

type CreateUser = z.infer<typeof createUserSchema>;

export default function pedro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUser>({
    resolver: zodResolver(createUserSchema),
  });

  async function onSubmit(data: any) {
    const res = await axios.post("/api/user", data);
  }

  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5px",
        }}
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
        {errors.name && (
          <Alert severity="error" style={{ marginBottom: "5px" }}>
            {errors.name.message}
          </Alert>
        )}
        {errors.email && (
          <Alert severity="error" style={{ marginBottom: "5px" }}>
            {errors.email.message}
          </Alert>
        )}
        {errors.password && (
          <Alert severity="error" style={{ marginBottom: "5px" }}>
            {errors.password.message}
          </Alert>
        )}
      </form>
    </main>
  );
}
