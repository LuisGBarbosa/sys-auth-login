import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors'; 

//arquivos de rotas
import { router } from './routes';

const serverPort = 3333;
const app = express();
app.use(express.json());
app.use(cors()); //habilitando cors para qualquer ip fazer requisições

app.use(router) //rotas

//Middleware para tratamento de erros
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof Error) {
        res.status(400).json({
            error: error.message
        });
    };

    return res.status(500).json({
        status: 'Error',
        message: 'Internal Server Error'
    });
})

app.listen(serverPort, () => console.log(`Servidor iniciado na porta: ${serverPort}`));