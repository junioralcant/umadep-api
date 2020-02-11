const express = require("express");

const routes = express.Router();

const middleware = require("./middleware/auth");

const UserController = require("./controller/UserController");
const MessageController = require("./controller/MessageController");
const SessionController = require("./controller/SessionController");

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);
routes.post("/messags", MessageController.store);

routes.use(middleware);
routes.get("/messags", MessageController.index);
routes.put("/messags/:id", MessageController.update);
module.exports = routes;
