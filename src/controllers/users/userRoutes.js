import { Router } from "express";
import UserController from "./userController.js";
import { Routes } from "../../constant/Routes.js";
import { checkToken } from "../../cors/middleware.js";
import UserValidation from "../../validation/UserValidation.js";

const router = Router();
const userRoutes = (app) => {
    router
    .route("/")
    .get(UserController.getUsers);

    router
    .route("/create")
    .post(UserValidation.create(), UserController.createUser);

  router
    .route("/update")
    .post(UserValidation.update(), UserController.updateUser);

  app.use(Routes.USER, checkToken, router);
};

export default userRoutes;
