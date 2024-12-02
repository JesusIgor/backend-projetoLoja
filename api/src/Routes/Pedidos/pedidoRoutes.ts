// routes/usuarioRoutes.ts
import { Router } from 'express';
import * as usuarioController from './Controllers/Pedidos;

const router = Router();

router.post('/pedido', usuarioController.createUser);
router.get('/pedidos', usuarioController.getAllUsers);
router.get('/pedidos/:id', usuarioController.getUserById);
router.put('/pedidos/:id', usuarioController.updateUser);
router.delete('/pedidos/:id', usuarioController.deleteUser);

export default router;