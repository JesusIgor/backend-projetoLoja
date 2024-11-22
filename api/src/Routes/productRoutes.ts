import express from 'express';
import { getProdutos } from '../Controllers/Produtos/getProducts';

const router = express.Router();

// Rota para pegar todos os produtos
router.get('/produtos', getProdutos);

// Rota para pegar um produto pelo ID

export default router;