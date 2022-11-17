import { Router } from "express";
import {
    createTodo,
    deleteTodo,
    getAllTodos,
    getOneTodo,
    updateTodo,
} from "../controllers/TodosController.js";

const todoRoutes = Router();

// Retrive all Todos
todoRoutes
    .get("/", getAllTodos)
    .get("/:todo_id", getOneTodo)
    .post("/", createTodo)
    .delete("/:todo_id", deleteTodo)
    .patch("/:todo_id", updateTodo);

export default todoRoutes;
