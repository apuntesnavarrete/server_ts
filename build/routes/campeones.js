"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.json({ 'users': ["campeon1", "campeon 2", "c3", "c4"] });
});
router.post('/', (_req, res) => {
    res.json({ 'users': ["campeon1", "campeon 2", "c3", "c4"] });
});
exports.default = router;
