import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface PayloadData {
    subject: string
}

export function isAuthenticated( req: Request, res: Response, next: NextFunction) {
    //recebendo token
    const authToken = req.headers.authorization;

    if(!authToken) {
        res.status(400).end();
    };

    //transformando const em array separando por espaço mas igorando o primeiro item.
    const [, token] = authToken.split(" ");

    //verificando token com método verify do JWT
    try {
        //o verify irá comparar a secret key do roken com a secret key que foi passada (no caso a que está armazenada no .env)
        //se forem iguais, estamos pegando o subject que contém o id do usuário que foi passado quando geramos o mesmo.
        const { subject } = verify(
            token, process.env.SECRET_KEY_JWT
        ) as PayloadData;

        req.user_id = subject; //injetando no request (requisições) o id do usuário - então a cada requisição o id irá junto.

        return next();
        
    } catch (error) {
        return res.send(400).end();
    }
}
