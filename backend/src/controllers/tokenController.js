const express = require('express');
const connection = require('../database/connection');
const routes = require('../routes');
const jwt = require('jsonwebtoken');
const { request, response } = require('express');


routes.post('register',async (request, response) => {
    const user = new User ({
        nome: request.body.nome,
        email: request.body.email,
        cpf: request.body.cpf,
        senha: request.body.senha
    });
    try{
        const saveUser = await user.save(); 
        response.send(saveUser);
    }catch(err){
        response.status(400).send(err);
    }
});


//validação

const joi = require('@hapi/joi');

 

module.exports = routes








/*
const { request, response } = require('express');
const connection = require('../database/connection');
const routes = require('../routes');
const UserController = require('./UserController');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET= "raster";

const loginValidacao = ('./verificacaoToken');

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

*/
