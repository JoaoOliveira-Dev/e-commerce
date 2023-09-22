import prisma from "@/lib/prima";

async function getUsers() {
  return await prisma.user.findMany();
}

export default async function usuarios() {
  const users = await getUsers();

  return (
    <main>
      {users.map((user, index) => (
        <div
          key={index}
          style={{ margin: "5px", display: "flex", flexDirection: "column" }}
        >
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.password}</span>
        </div>
      ))}
    </main>
  );
}
