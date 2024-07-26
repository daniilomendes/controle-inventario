import { Request, Response } from "express";
import { ListProductByCategoryService } from "../../services/product/ListProductByCategoryService";

class ListProductByCategoryController {
  async handle(request: Request, response: Response) {
    const category_id = request.query.category_id as string;
    const listProductByCategoryService = new ListProductByCategoryService();

    const products = await listProductByCategoryService.execute({
      category_id,
    });

    return response.json(products);
  }
}

export { ListProductByCategoryController };
