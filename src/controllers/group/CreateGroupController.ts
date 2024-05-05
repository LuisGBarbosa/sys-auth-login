import { Request, Response } from "express";
import CreateGroupService from '../../services/group/CreateGroupService';

class CreateGroupController {
    async handle(req: Request, res: Response){
        //pegando info dos parâmetros
        const { name } = req.body;

        //instanciando service
        const createGroupService = new CreateGroupService();
        const group = await createGroupService.execute({ name })

        return res.json(group);
    }
}

export { CreateGroupController };