// controllers/usuarioController.ts
import { Request, Response } from 'express';
import { PrismaClient, Usuarios } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new user
export async function createUser(req: Request, res: Response): Promise<void> {
  const { nome, sobrenome, usuario, senha } = req.body;
  try {
    const user = await prisma.usuarios.create({
      data: { nome, sobrenome, usuario, senha }
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all users
export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await prisma.usuarios.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get user by ID
export async function getUserById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    const user = await prisma.usuarios.findUnique({
      where: { id: Number(id) }
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update a user
export async function updateUser(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { nome, sobrenome, usuario, senha } = req.body;
  try {
    const updatedUser = await prisma.usuarios.update({
      where: { id: Number(id) },
      data: { nome, sobrenome, usuario, senha }
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a user
export async function deleteUser(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    await prisma.usuarios.delete({
      where: { id: Number(id) }
    });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}