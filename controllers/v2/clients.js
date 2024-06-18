const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient()

//Testa a ligação
exports.testConnection = async (req, res) => {
    try {
        await prisma.$connect();
        res.send('Ligação bem-sucedida com o PostgreSQL!');
      } catch (error) {
        res.send('Erro ao conectar ao PostgreSQL:', error);
      } finally {
        await prisma.$disconnect();
      }
  }

//devolve todos os clientes
exports.getAll = async (req, res) => {
    try {
        //lê todos da base de dados
        const response = await prisma.clients.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: 'Falha ao mostrar todos os clientes' })
    }
}


//devolve o cliente pelo id
exports.getById = async (req, res) => {
    //get student id requested
    const id = req.params.id*1;
    try {
        //encontra cliente pelo id
        const response = await prisma.clients.findUnique({
            where: {
                id: id,
            },
        })
        //devolve cliente
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: `Falha ao mostrar o cliente com o id ${id}` })
    }
}


//criar um cliente
exports.create = async (req, res) => {
    //apanhar os dados enviados
    const { id, name, brand, problems, date, passou } = req.body;
    try {
        //criar um novo cliente
        const client = await prisma.clients.create({
            data: {
               id: id,
               name: name,
               brand: brand,
               problems: problems,
               date: date,
               passou: passou
            },
        })
        //devolve o cliente criado
        res.status(201).json(client)
    } catch (error) {
        res.status(400).json({ msg: 'Falha ao criar o cliente.' })
    }
}




//atualiza cliente
exports.update = async (req, res) => {
    const { id, name, brand, problems, date, passou } = req.body;

    try {
        //procura cliente para atualizar 
        const client = await prisma.clients.update({
            where: {
                id: id*1,
            },
            data: {
                name: name,
                brand: brand,
                problems: problems,
                date: date,
                passou: passou
            },
        })
        //devolva cliente atualizado
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json({ msg: 'Falha ao atualizar o cliente.' })
    }
}


//apaga cliente pelo id
exports.delete = async (req, res) => {
    //procura cliente pelo id
    const id = req.params.id;
    try {
        //apaga cliente
        await prisma.clients.delete({
            where: {
                id: id*1,
            },
        })
        //Devolve "Cliente com id "..." apagado "
        res.status(200).send(`Cliente com id ${id} apagado.`);
    } catch (error) {
        res.status(400).json({ msg: `Falha a apagar o cliente com id ${id}` })
    }
}