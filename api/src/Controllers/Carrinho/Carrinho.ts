// controllers/carrinhoController.ts
import { Request, Response } from 'express';
import { PrismaClient, Carrinho } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new item in the cart
export async function createCarrinho(req: Request, res: Response): Promise<void> {
  const { produto_id, quantidade, pedido_id } = req.body;
  try {
    const item = await prisma.carrinho.create({
      data: { produto_id, quantidade, pedido_id }
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all cart items
export async function getAllCarrinho(req: Request, res: Response): Promise<void> {
  try {
    const items = await prisma.carrinho.findMany();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get a cart item by ID
export async function getCarrinhoById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    const item = await prisma.carrinho.findUnique({
      where: { id: Number(id) }
    });
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update cart item
export async function updateCarrinho(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { produto_id, quantidade, pedido_id } = req.body;
  try {
    const updatedItem = await prisma.carrinho.update({
      where: { id: Number(id) },
      data: { produto_id, quantidade, pedido_id }
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete cart item
export async function deleteCarrinho(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    await prisma.carrinho.delete({
      where: { id: Number(id) }
    });
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}