"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json("Hello World");
});
app.get("*", (req, res) => {
    res.status(500).send("Route Not Found");
});
app.listen(5000, () => {
    console.log("Server Started o port 5000");
});
