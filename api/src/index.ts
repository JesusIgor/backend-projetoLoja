import express, { Express } from 'express';
import productRoutes from './Routes/productRoutes';

const router = express();

// Rota para pegar todos os produtos

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware para permitir o acesso à API via JSON
app.use(express.json());

// Usando as rotas do produto
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});