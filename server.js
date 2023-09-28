const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
const port = 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);

server.use(
    jsonServer.rewriter({
        "/*": "/$1",
    })
)

server.use(router);

server.listen(port);


module.exports = server