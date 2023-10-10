const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);

server.listen(5000, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
