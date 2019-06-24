import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import { login, logout, join } from "../controllers/userController";

const globalRouter = express();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
