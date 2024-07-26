import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./controllers/user/RemoveUserController";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

// User Routes
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.delete("/user/remove", new RemoveUserController().handle);

export { router };
