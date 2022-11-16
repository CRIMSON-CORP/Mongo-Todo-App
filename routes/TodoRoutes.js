import { Router } from "express";
import { getAllTodos } from "../controllers/TodosController.js";

const todoRoutes = Router();

todoRoutes.get("/", getAllTodos);

export default todoRoutes;
