import { COOKIE_NAME } from "@/constants";
import { verify, JwtPayload } from "jsonwebtoken";

export function verify_auth_admin(cookieStore: any) {
  const token = cookieStore.get(COOKIE_NAME);

  // console.log("token", token);
  if (!token) {
    return false;
  }

  const { value } = token;
  const secret = process.env.JWT_SECRET || "";

  let verify_auth: JwtPayload | string;

  try {
    verify_auth = verify(value, secret);
  } catch (error) {
    console.error("Erro na verificação do token:", error);
    return false;
  }

  if (typeof verify_auth === "string") {
    console.error("Token inválido");
    return false;
  }

  const email = verify_auth.email;

  // console.log("verify", verify_auth);

  if (email === process.env.EMAIL_ADMIN) {
    return true;
  } else {
    return false;
  }
}
