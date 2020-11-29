const connection = require('../database/connection');

module.exports = {
    async listar (request, response) {
        const user = await connection('user').select('*');

        return response.json(user);
    },

     async create(request, response){    
        const {SAB_CODIGO, SAB_LOGIN, SAB_SENHA, SAB_NOME, SAB_TIPO, SAB_EMAIL, SAB_ACESSOEXTERNO, ATIVO } = request.body;

        await connection('user').insert({
            SAB_CODIGO,
            SAB_LOGIN,
            SAB_SENHA,
            SAB_NOME,
            SAB_TIPO,
            SAB_EMAIL,
            SAB_ACESSOEXTERNO,
            ATIVO
            })
            
        return response.json()
    },
}