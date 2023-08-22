"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntries = void 0;
const campeones_json_1 = __importDefault(require("./campeones.json"));
const getEntries = () => campeones_json_1.default;
exports.getEntries = getEntries;
const addEntry = () => null;
exports.addEntry = addEntry;
