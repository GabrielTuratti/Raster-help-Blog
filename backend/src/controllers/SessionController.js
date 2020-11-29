const connection = require('../database/connection');
const jwt = require ('jsonwebtoken');

module.exports = {
    async create(request, response) {
        const { SAB_CODIGO} = request.body;

        const user = await connection('user')
        .where('SAB_CODIGO', SAB_CODIGO)
        .select('SAB_LOGIN')
        .first();
        
        if(!user) {
            return response.status(400).json({ error: 'Nem usuario encontrado com este ID.'})
        }
        
        return response.json(user);
    
   
    }
}


 /*
    const {error} = loginValidacao(request.body);
    if (error) return response.status(400).send(error.details[0].message);

    const cpfExist = await UserController.findOne({ cpf: request.body.cpf})
    if (!cpfExist) return response.status(400).send('Cpf não consta no banco ');

    const senhaExist = await SAB_SENHA.compare(request.body.SAB_SENHA, user.SAB_SENHA);
    if (!senhaExist) return response.status(400).send('Email ou senha inválida')

     response.send('logou');
    */