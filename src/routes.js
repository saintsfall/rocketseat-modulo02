import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Caio Santos',
//     email: 'caio.f.santos@icloud.com',
//     password_hash: '1234',
//   });
//   res.json(user);
// });

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

export default routes;
