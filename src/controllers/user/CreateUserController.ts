import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) { //declarando um método assíncrono pra ser o constructor
        const { name, email, password, group_id } = req.body;

        //instanciar service, chamar método execute passarando params e armazenar retorno na const user
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name, email, password, group_id
        });

        return res.json(user)
    }
};

export { CreateUserController };