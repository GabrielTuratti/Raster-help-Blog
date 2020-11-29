const jwt = require('jsonwebtoken');
const TOKEN_SECRET= "raster";


module.exports = function(request, response, next){
    const token = require.header('auth-token');
    if(!token) return response.status(401).send('acesso negado');

    try{
        const verificado = jwt.verify(token, TOKEN_SECRET);
        request.user = verificado
        next();
    }catch (err){
        response.status(400).send('token inválido')
    }
}