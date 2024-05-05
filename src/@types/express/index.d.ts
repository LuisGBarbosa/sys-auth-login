//criando uma tipagem extendida da interface Request do express
//para adicionar mais um tipo a essa interface
declare namespace Express {
    export interface Request {
        user_id: string
    }
}