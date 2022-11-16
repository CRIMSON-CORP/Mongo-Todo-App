import Todos from "../models/TodoModel.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export async function getAllTodos(req, res) {
    try {
        const todos = await Todos.find();

        res.status(200).json({
            success: true,
            message: "Successfully fetched all Todos",
            data: todos,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `An error occured while fetching all Todos - ${error.message}`,
        });
    }
}

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export async function createTodo(req, res) {
    const { description, title } = req.body;

    try {
        if (!title) throw new Error("A title is required!");

        const newTodo = new Todos({
            title,
            description,
        });

        await newTodo.save();

        res.status(201).json({
            success: true,
            message: "Successfully created a Todo",
            data: newTodo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `An error occured while creating a Todo - ${error.message}`,
        });
    }
}
