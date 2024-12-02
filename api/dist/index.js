"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("./Routes/productRoutes"));
const router = (0, express_1.default)();
// Rota para pegar todos os produtos
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware para permitir o acesso à API via JSON
app.use(express_1.default.json());
// Usando as rotas do produto
app.use('/api', productRoutes_1.default);
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
