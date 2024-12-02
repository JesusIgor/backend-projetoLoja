// controllers/pedidoController.ts
import { Request, Response } from 'express';
import { PrismaClient, Pedidos } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new order
export async function createPedido(req: Request, res: Response): Promise<void> {
  const { usuario_id, total, data } = req.body;
  try {
    const pedido = await prisma.pedidos.create({
      data: { usuario_id, total, data }
    });
    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all orders
export async function getAllPedidos(req: Request, res: Response): Promise<void> {
  try {
    const pedidos = await prisma.pedidos.findMany();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get order by ID
export async function getPedidoById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    const pedido = await prisma.pedidos.findUnique({
      where: { id: Number(id) }
    });
    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update order
export async function updatePedido(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { usuario_id, total, data } = req.body;
  try {
    const updatedPedido = await prisma.pedidos.update({
      where: { id: Number(id) },
      data: { usuario_id, total, data }
    });
    res.status(200).json(updatedPedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete order
export async function deletePedido(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    await prisma.pedidos.delete({
      where: { id: Number(id) }
    });
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}