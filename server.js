import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/TodoRoutes.js";

const server = express();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "localhost" || "127.0.0.1";

server.use("/todos", todoRoutes);

mongoose.connect(
    "mongodb+srv://Crimson:Crimson%40100%25@cluster0.1qiaqba.mongodb.net/?retryWrites=true&w=majority",
    (error) => {
        if (error) return console.log("Failed to connect with Database", error);
        return console.log(`Databse connected successfully`);
    }
);

server.listen(PORT, HOST, (error) => {
    if (error) return console.log("Server failed to start", error);
    return console.log(`Server runing on http://${HOST}:${PORT}`);
});
