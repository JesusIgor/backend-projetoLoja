// routes/usuarioRoutes.ts
import { Router } from 'express';
import * as usuarioController from './Controllers/Carrinho;

const router = Router();

router.post('/carrinho', usuarioController.createUser);
router.get('/carrinho', usuarioController.getAllUsers);
router.get('/carrinho/:id', usuarioController.getUserById);
router.put('/carrinho/:id', usuarioController.updateUser);
router.delete('/carrinho/:id', usuarioController.deleteUser);

export default router;