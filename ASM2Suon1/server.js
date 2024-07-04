const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const db = router.db; // Access to lowdb instance
  const users = db.get('users');
  users.push(req.body).write();
  res.sendStatus(200);
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
