import { connect } from "mongoose";

export function connectToMongoDB() {
    return connect(
        "mongodb+srv://Crimson:Crimson%40100%25@cluster0.1qiaqba.mongodb.net/?retryWrites=true&w=majority",
        (error) => {
            if (error) return console.log("Failed to connect with Database", error);
            return console.log(`Databse connected successfully`);
        }
    );
}
