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