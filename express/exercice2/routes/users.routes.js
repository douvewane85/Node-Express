import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const UserRouter = Router();
UserRouter.get("/", usersController.indexUser);
UserRouter.get("/:id", usersController.showUser);
UserRouter.post("/", usersController.createUser);
UserRouter.delete("/:id", usersController.destroyUser);
UserRouter.put("/:id", usersController.updateUser);
UserRouter.patch("/:id/password", usersController.changePassword);
export default UserRouter;