import express, { Express } from 'express';
import productRoutes from './Routes/Produtos/productRoutes';
import carrinhoRoutes from './Routes//Carrinho/carrinhoRoutes';
import pedidosRoutes from './Routes/Pedidos/pedidoRoutes';
import userRoutes from './Routes/Users/userRoutes';


const router = express();


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', productRoutes);
app.use('/api', carrinhoRoutes);
app.use('/api', pedidosRoutes);
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});