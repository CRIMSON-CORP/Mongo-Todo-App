import { Schema, model } from "mongoose";

const TodoSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    timestamp: {
        type: Date,
        required: false,
        default: Date.now(),
    },
});

const Todos = model("todo_model", TodoSchema);

export default Todos;
