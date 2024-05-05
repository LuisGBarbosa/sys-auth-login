import { Request, Response } from 'express';
import { DetailsUserService } from '../../services/user/DetailsUserService';

class DetailsUserController {
    async handle(req: Request, res: Response) {

        //recuperando user_id na requisição
        const user_id = req.user_id;

        const detailsUserService = new DetailsUserService();
        const detailsUser = await detailsUserService.execute(user_id)

        return res.json(detailsUser);
    };
};

export { DetailsUserController };