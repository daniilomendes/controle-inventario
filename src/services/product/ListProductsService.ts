import { prismaCLient } from "../../prisma";

class ListProductsService {
  async execute() {
    const products = await prismaCLient.product.findMany({
      select: {
        id: true,
        name: true,
        amount: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return products;
  }
}

export { ListProductsService };
