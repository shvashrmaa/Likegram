"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database/database");
const userRoute_1 = __importDefault(require("./routers/userRoute"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["POST", "GET", "DELETE", "UPDATE"],
}));
app.use(express_1.default.json());
(0, database_1.databaseConnection)();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/v1", userRoute_1.default);
app.listen(process.env.PORT, () => {
    console.log(`server is listening on http://localhost:${process.env.PORT}`);
});
