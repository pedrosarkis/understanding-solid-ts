import {Router} from 'express';
import createUserController from './useCases/createUser';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'Hello World'});
});

router.post('/users', (req, res) => {
    return createUserController.handle(req, res);
});

export default router;