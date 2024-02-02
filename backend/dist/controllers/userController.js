"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const genrateToken_1 = __importDefault(require("../middleware/genrateToken"));
const registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, userName, password } = req.body;
    try {
        const isEmailExist = yield userSchema_1.default.findOne({ email });
        const isUsernameExist = yield userSchema_1.default.findOne({ userName });
        if (isEmailExist) {
            return res.status(401).send("Email already exist");
        }
        if (isUsernameExist) {
            return res.status(401).send("userName already exist");
        }
        const newUser = yield userSchema_1.default.create({ email, userName, password });
        if (newUser) {
            return res.status(200).json(newUser);
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}));
exports.registerUser = registerUser;
const loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield userSchema_1.default.findOne({ email });
        if (user && (yield user.comparePassword(password))) {
            res.status(200).json({
                token: yield (0, genrateToken_1.default)(user._id),
            });
        }
        else {
            res.status(401).send("Invalid email or password");
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.loginUser = loginUser;
