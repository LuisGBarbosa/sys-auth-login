import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateGroupController } from './controllers/group/CreateGroupController';
import { DetailsUserController } from './controllers/user/DetailsUserController'

//middlewars
import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();

//rotas user
router.post('/users', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/detailsUser', isAuthenticated, new DetailsUserController().handle);

//rotas group
router.post('/groups', new CreateGroupController().handle);

export { router };