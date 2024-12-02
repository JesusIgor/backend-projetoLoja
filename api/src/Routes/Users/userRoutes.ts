// routes/usuarioRoutes.ts
import { Router } from 'express';
import * as usuarioController from './Controllers/Users;

const router = Router();

router.post('/usuarios', usuarioController.createUser);
router.get('/usuarios', usuarioController.getAllUsers);
router.get('/usuarios/:id', usuarioController.getUserById);
router.put('/usuarios/:id', usuarioController.updateUser);
router.delete('/usuarios/:id', usuarioController.deleteUser);

export default router;