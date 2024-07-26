import { prismaCLient } from "../../prisma";

class ListCategoryService {
  async execute() {
    const categories = await prismaCLient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  }
}

export { ListCategoryService };
