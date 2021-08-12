const model = require('../database/models/index');

const getTasks = async (req, res) => {
  const tasks = await model.Task.findAll();
  return res.status(200).json({ tasks });
};

//esta opcion usa el setter que nos provee sequelize
const addTask = async (req, res) => {
  const { userId } = req; //me agarro el id que guardo cuando pasa por el middleware
  const user = await model.User.findByPk(userId); // me traigo al usuario que esta haciendo la peticion
  const { name, description, startDate, endDate } = req.body; // agarro los parametros que envie en el body
  await model.Task.create({ name, description, startDate, endDate, UserId: userId }).then(
    async (createdTask) => {
      await createdTask.setUser(user); // usamos el setter para asignarle el valor
      return res.status(201).json({ createdTask });
    },
  );
};

//esta opcion es mas rapida, agarramos el id del usuario que decodificamos en el token
// y lo enviamos directamente al crear la task
const addTaskOpcionA = async (req, res) => {
  const { userId } = req;
  const { name, description, startDate, endDate } = req.body;
  const inserted = await model.Task.create({
    name,
    description,
    startDate,
    endDate,
    UserId: userId, //insertamos el id del usuario directamente al crear la task
  });
  return res.status(201).json({ inserted });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await model.Task.destroy({ where: { id: id } });
  const tasks = await model.Task.findAll();
  return res.status(200).json({ tasks });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updated = await model.Task.update(data, { where: { id: id } });
  console.log(updated);
  const task = await model.Task.findByPk(id);
  return res.status(200).json({ task });
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
};
