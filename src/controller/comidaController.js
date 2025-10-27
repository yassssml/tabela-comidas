import * as comidaModel from './../model/comidaModel.js'

export const listAll = async (req , res) => {
    try {
        const comidas = await comidaModel.findAll();

        if (!comidas || comidas.lenght === 0) {
            res.status(404).json({
                total: 0,
                message: "Não há comidas na lista",
                comidas
            })
        }

        res.status(200).json({
            total: comidas.lenght,
            message: "Lista de comidas",
            comidas
        })
    } catch(error) {
        res.status(500).json({
            erro: "Erro interno de servidor",
            detalhes: error.message,
            status: 500
        })
    }
}

export const listOne = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const comida = await comidaModel.findOne(id);

        if(!comida) {
            return res.status(404).json({
                erro: "Refeição não encontrada",
                message: "Verifique o id da refeição",
                id: id
            })
        }

        res.status(200).json({
            
            message: "Refeição encontrada",
            comida
        })
    } catch(error) {
        res.status(500).json({
            erro: "Erro interno de servidor",
            detalhes: error.message,
            status: 500
        })
    }
}

export const create = async (req , res) => {
    try {
        const camposObrigatorios = ['nome', 'tipo', 'preco', 'descricao'];

        const dado = req.body;

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);
        
        if (faltando.length > 0) {
          return res.status(400).json({
            erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
          });
        }

    const newFood =await comidaModel.create(req.body)
        res.status(200).json({
            message: 'Refeição adicionada ao cardápio com sucesso!',
            comida: newFood
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao adicionar comida',
            detalhes: error.message
        }) 
    }
}

export const deletar = async (req , res) => {
    try {
        const id = parseInt(req.params.id);

        const comidaExiste = await comidaModel.findOne(id);

        if(!comidaExiste) {
            return res.status(404).json({
                erro: 'Refeição não encontrado com esse id',
                id: id
            })
        }

        await comidaModel.deletar(id);

        res.status(200).json({
            messsage: 'Comida apagada com sucesso!',
            comidaRemovida: comidaExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar Refeição!',
            detalhes: error.message
        })
    }
}

export const update = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const comidaExiste = await comidaModel.findOne(id);

        if (!comidaExiste) {
            return res.status(404).json({
                erro: 'Refeição não existe!',
                id: id
            })
        }
        
        const comidaAtualizada = await comidaModel.update(id, dados)
        res.status(200).json({
            message: 'Comida atualizado com sucesso!' ,
            comida: comidaAtualizada
        })


    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar Refeição!',
            detalhes: error.message
        })
    }
}