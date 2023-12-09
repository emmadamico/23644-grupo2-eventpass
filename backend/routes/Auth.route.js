import { Router } from 'express';
import { login, register, deleteUser, updateUserInfo} from '../controllers/Auth.controller.js';
import { bodyLoginValidator, bodyRegisterValidator, bodyDeleteUserValidator } from '../middlewares/ValidatorManager.js';

const router = Router();

router.post('/register', bodyRegisterValidator, register);

router.post('/login', bodyLoginValidator, login);

router.delete('/deleteUser', bodyDeleteUserValidator, deleteUser);

router.patch('/updateUserInfo', updateUserInfo);

export default router;