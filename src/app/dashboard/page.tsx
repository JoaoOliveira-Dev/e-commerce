import CardRelatorio from "@/components/cardrelatorio/cardrelatorio";
import prisma from "@/lib/prima";

const Page = async () => {
  const res = await prisma.orderItem.findMany({
    include: {
      product: true,
    },
  });

  return (
    <main>
      <CardRelatorio
        titulo="Relatório de Vendas"
        qtdVendas={res.length}
        qtdArrecadado={res[0].product.price}
      />
    </main>
  );
};

export default Page;
