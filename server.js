import bodyParser from "body-parser";
import express from "express";
import { connectToMongoDB } from "./database/index.js";
import todoRoutes from "./routes/TodoRoutes.js";

// Constants
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "localhost" || "127.0.0.1";

// Initialize App
const server = express();

//connect to database
connectToMongoDB();

// Middlewares
server.use(bodyParser.json());
server.use("/todos", todoRoutes);

// Start Server listner
server.listen(PORT, HOST, (error) => {
    if (error) return console.log("Server failed to start", error);
    return console.log(`Server runing on %chttp://${HOST}:${PORT}`, "color: blue");
});
