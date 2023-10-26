// import { cookies } from "next/headers";

// async function getUserByToken(token: string) {

//   return token;
// }

export default async function pedrinhoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = cookies();

  // const user = await getUserByToken(cookieStore.get("token")?.value ?? "");

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
      {children}
    </main>
  );
}
