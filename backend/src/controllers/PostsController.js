const connection = require('../database/connection');

module.exports = {
    async listar (request, response) {
        const { page = 1} = request.query;
        
        const [count] = await connection('posts').count();

        const posts = await connection('posts')
        .limit(6)
        .offset((page -1) * 5)
        .select('*');

        response.header('Total_Contado', count['count(*)']);

        return response.json(posts); 
    },
     
    async create(request, response){    
        const {titulo, descricao, acesso, link, data } = request.body;

        await connection('posts').insert({
            titulo,
            descricao,
            acesso,
            link,
            data
        })

        return response.json()
    },
    
    // REVER SE A NECESSIDADE
    async delete(request, response) {
         const { SAB_CODIGO } = require.params;
         const POST_ID = request.headers.authorization;
          
         const posts = await connection('posts')
         .where('SAB_CODIGO', SAB_CODIGO)
         .select('POST_ID')
         .first();

         if (posts.POST_ID != SAB_CODIGO ) {
             return response.status(401).json({error: 'ação negada.'})
         }
         await connection('posts').where('SAB_CODIGO', SAB_CODIGO).delete();

         return response.status(204).send();
    },

    
};