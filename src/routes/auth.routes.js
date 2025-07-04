import {Router} from 'express'
import {
    login, 
    register, 
    logout, 
    profile
} from "../controllers/auth.controllers.js";
import {authRequired} from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'; 
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';
import { deleteAccount } from "../controllers/auth.controllers.js";

const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);
router.delete('/users/me', authRequired, deleteAccount);

export default router                  //para conectar con expreess