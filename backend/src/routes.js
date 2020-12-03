const express = require("express");
const connection = require("./database/connection");
const routes = express.Router();
const PostsController = require("./controllers/PostsController");
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
const SessionController = require("./controllers/SessionController");

const AuthMiddleware = require("./middlewares/AuthMiddleware");

// SESSION CONTROL
routes.post(
  "/login",
  /* AuthController.athenticate, */ AuthController.athenticate
);
routes.post(
  "/session",
  /* AuthController.athenticate, */ SessionController.create
);

// POSTAGENS
routes.get("/posts", /* AuthController.athenticate, */ PostsController.listar);
routes.post("/posts", /* AuthController.athenticate, */ PostsController.create);

// USUARIO
routes.get("/user", /* AuthController.athenticate, */ UserController.listar);
routes.post("/user", /* AuthController.athenticate, */ UserController.create);

routes.get("/Login", /* AuthController.athenticate, */ UserController.listar);

module.exports = routes;
