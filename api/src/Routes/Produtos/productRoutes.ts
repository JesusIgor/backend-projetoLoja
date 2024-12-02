import express from 'express';
import { getProdutos } from '../Controllers/Produtos/getProducts';

const router = express.Router();

router.get('/produtos', getProdutos);


export default router;