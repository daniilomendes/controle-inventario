import { prismaCLient } from "../../prisma";
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";

class EditCategoryService {
  async execute({ name, category_id }: EditCategoryRequest) {
    if (category_id === " " || name === " " || !category_id || !name) {
      throw new Error("Argumento inválido para editar a categoria.");
    }

    const productEdited = await prismaCLient.category.update({
      where: {
        id: category_id,
      },
      data: {
        name: name,
      },
    });

    return productEdited;
  }
}

export { EditCategoryService };
