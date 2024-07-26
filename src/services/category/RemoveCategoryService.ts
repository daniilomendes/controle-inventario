import { prismaCLient } from "../../prisma";
import { RemoveCategoryRequest } from "../../models/interfaces/category/RemoveCategoryRequest";

class RemoveCategoryService {
  async execute({ category_id }: RemoveCategoryRequest) {
    if (category_id) {
      const category = await prismaCLient.category.delete({
        where: {
          id: category_id,
        },
      });

      return category;
    }
  }
}

export { RemoveCategoryService };
