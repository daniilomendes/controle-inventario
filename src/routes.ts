import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

// User Routes
router.post("/user", new CreateUserController().handle);

export { router };
