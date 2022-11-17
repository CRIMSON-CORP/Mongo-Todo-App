import Todos from "../models/TodoModel.js";

// Get all todos
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

// Get one todo
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export async function getOneTodo(req, res) {
    const { todo_id } = req.params;

    try {
        const todo = await Todos.findById(todo_id);

        if (!todo) {
            res.status(404).json({
                success: true,
                message: "No todo with that Id was found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Successfully fetched Todo",
                data: todo,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `An error occured while fetching Todo - ${error.message}`,
        });
    }
}

//Create a single Todo
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

//Delete a single Todo
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export async function deleteTodo(req, res) {
    const { todo_id } = req.params;

    try {
        if (!todo_id) throw new Error("A todo id is required, which todo do you want to delete?");

        const removedTodo = await Todos.findByIdAndRemove(todo_id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted a Todo",
            data: removedTodo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `An error occured while deleting this Todo - ${error.message}`,
        });
    }
}

//Update a single Todo
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export async function updateTodo(req, res) {
    const { params, body } = req;
    const { todo_id } = params;

    try {
        if (!todo_id) throw new Error("A todo id is required, which todo do you want to update?");

        const updatedTodo = await Todos.findByIdAndUpdate(
            todo_id,
            {
                $set: {
                    ...body,
                    updatedAt: Date.now(),
                },
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated a Todo",
            data: updatedTodo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `An error occured while updating this Todo - ${error.message}`,
        });
    }
}
