"use client";

import { Prisma } from "@prisma/client";
import axios from "axios";

import { useEffect, useState } from "react";

import ButtonBuy from "../ButtonBuy/buttonbuy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Image {
  id: string;
  productId: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Produto {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  isFeatured: boolean;
  isArchived: boolean;
  size: string;
  dropId: string | null;
  createdAt: Date;
  updatedAt: Date;
  images: Image[];
}

const MainProducts = () => {
  const [products, setProducts] = useState<Produto[]>();
  const [loading, setLoading] = useState(false);

  const Buy = async (event: any, productId: string) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const res = await axios.post(
        "/api/compra",
        {
          productId,
        },
        {
          validateStatus: () => true,
        }
      );
      console.log(res);
      toast.success("Compra realizada com sucesso! 😎");
    } catch (error) {
      console.error("Erro ao realizar a compra:", error);
      toast.error("Erro ao realizar a compra! 😳");
    }
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const resProducts = await axios.get("/api/products", {
          validateStatus: () => true,
        });

        setProducts(resProducts.data);
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
    }

    getProducts();
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {products ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
                width: "20rem",
                height: "100%",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
              }}
            >
              {/* Renderize a imagem se existir */}
              {product.images && product.images.length > 0 && (
                <img
                  src={product.images[0].url} // Ajuste para acessar a primeira imagem
                  alt="imagem do produto"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              )}
              <h2>{product.name}</h2>
              <h3>R$ {product.price}</h3>
              <div>
                <ButtonBuy
                  style={{ marginBottom: "10px" }}
                  onClick={(e: any) => Buy(e, product.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <h1>Carregando...</h1>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainProducts;
