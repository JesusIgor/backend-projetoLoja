"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProdutos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getProdutos = async (req, res) => {
    try {
        const produtos = await prisma.produtos.findMany();
        res.json(produtos);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os produtos' });
    }
};
exports.getProdutos = getProdutos;
// Função para pegar um produto específico pelo ID
