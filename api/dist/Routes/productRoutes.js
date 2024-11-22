"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getProducts_1 = require("../Controllers/Produtos/getProducts");
const router = express_1.default.Router();
// Rota para pegar todos os produtos
router.get('/produtos', getProducts_1.getProdutos);
// Rota para pegar um produto pelo ID
exports.default = router;
