const express = require('express');
const connection = require('./database/connection');
const routes = express.Router();
const PostsController = require('./controllers/PostsController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');


const loginValidacao = ('./verificacaoToken');

// SESSION CONTROL
routes.post('/session', SessionController.create);


// POSTAGENS
routes.get('/posts',PostsController.listar);
routes.post('/posts', PostsController.create);
routes.delete('/posts:id', PostsController.delete);

// USUARIO
routes.get('/user', UserController.listar);
routes.post('/user', UserController.create);


/*
//TESTE TOKEN
routes.post('/teste', async (request, response)=> {
    const {error} = loginValidacao(request.body);
    if (error) return response.status(400).send(error.details[0].message);

    const cpfExist = await UserController.findOne({ cpf: request.body.cpf})
    if (!cpfExist) return response.status(400).send('Cpf não consta no banco ');

    const senhaExist = await SAB_SENHA.compare(request.body.SAB_SENHA, user.SAB_SENHA);
    if (!senhaExist) return response.status(400).send('Email ou senha inválida')

    response.send('logou');

     
    const token = jwt.sign({SAB_CODIGO: user.SAB_CODIGO},TOKEN_SECRET, {expiresIn:300} );
    response.header('auth-token', token).send(token);
})



routes.post('/login', async (request, response)=> {
    const {error} = loginValidacao(request.body);
    if (error) return response.status(400).send(error.details[0].message);

    const cpfExist = await UserController.findOne({ cpf: request.body.cpf})
    if (!cpfExist) return response.status(400).send('Cpf não consta no banco ');

    const senhaExist = await SAB_SENHA.compare(request.body.SAB_SENHA, user.SAB_SENHA);
    if (!senhaExist) return response.status(400).send('Email ou senha inválida')

     response.send('logou');
})
*/

module.exports = routes;