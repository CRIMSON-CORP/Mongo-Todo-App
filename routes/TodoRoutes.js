import { Router } from "express";
import { createTodo, getAllTodos } from "../controllers/TodosController.js";

const todoRoutes = Router();

// Retrive all Todos
todoRoutes.get("/", getAllTodos).post("/", createTodo);

export default todoRoutes;
