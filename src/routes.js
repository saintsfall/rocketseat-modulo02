import Router from 'express';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: 'Hello World from the home page' })
);

export default routes;
