import express, { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const app = express();
app.get('/', (req:Request, res:Response) => {
    res.json("Hello World")
})

app.get("*", (req:Request, res:Response) => {
    res.status(500).send("Route Not Found")
})
app.listen(5000, () => {
    console.log("Server Started o port 5000");
})