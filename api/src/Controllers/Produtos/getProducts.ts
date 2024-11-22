import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { RequestHandler } from 'express';

const prisma = new PrismaClient();

export const getProdutos = async (req: Request, res: Response) => {
  try {
    const produtos = await prisma.produtos.findMany();

    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os produtos' });
  }
};

// Função para pegar um produto específico pelo ID
