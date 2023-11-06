import Nav from "./nav";
import prisma from "@/lib/prima";
import ButtonDrop from "../ButtonDrop/btndrop";
import "./header.css";

const Header = async () => {
  const drop = await prisma.newDrop.findUnique({
    where: {
      id: "5807c446-f92e-49fe-a2fb-11e9aebc0a4f",
    },
  });

  return (
    <div style={{ borderRadius: "10px" }}>
      <div>
        <Nav />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "98%",
          height: "50vh",
          backgroundImage: `url(${drop?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: "100%",
          }}
        >
          {/* <img
            src={drop?.url}
            alt="imagem do drop"
            className="imgDrop"
            style={{
              width: "90%",
              zIndex: "0",
              margin: "auto", // Centraliza horizontalmente
              borderRadius: "5px",
            }}
          /> */}
          <h1 style={{ color: "white" }}>Novo {drop?.name}!!</h1>
          <ButtonDrop />
        </div>
      </div>
    </div>
  );
};

export default Header;
