import { db } from '../model/index';




const Measurement = db.measurement;


const rotaRaiz = async (req, res) => {
  try {
    res.send({
      message:
        'Bem-vindo à API de lançamentos. Acesse /measurement e siga as orientações',
    });

  } catch (error) {
    res.status(400).send({ message: 'Erro ao pesquisar rota' })
  }
}


const create = async (req, res) => {

  const measurement = new Measurement({
    sensor_name: req.body.sensor_name,
    temperature: req.body.temperature,
    humidity: req.body.humidity

  })
  try {
    await measurement.save(measurement)
    res.send({ message: "Medicao salva com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
};



const findAll = async (req, res) => {

  try {
    const data = await Measurement.find()
    res.send(data)
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
  }

};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Measurement.findById({ _id: id })
    if (!data) {
      res.status(400).send(`Measurement ${id} não encontrado!`)
    } else {
      res.send(data);
    }

  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Measurement id: ' + id });
  }
};

const removeAll = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Measurement.deleteMany()
    if (!data) {
      res.status(400).send(`Measurement não encontrado para remover!`)
    } else {
      res.send({ message: `Measurement removidos com sucesso!!` });
    };
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos as Measurement' });
  }
};

export default { rotaRaiz, create, findAll, findOne, removeAll }