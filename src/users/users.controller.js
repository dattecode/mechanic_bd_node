const UserService = require("../users/users.service");

//buscar todo los usarios
const findAllUsers = async (req, res) => {
  try {
    const users = await UserService.findUsers();

    return res.status(200).json({
      message: "find all users",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

//obtener un usuario por id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.findUserById(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `error in data id: ${id} not found`,
      });
    }

    return res.status(200).json({
      message: "connect",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

//crea un usuario oh un empleado
const createUsers = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await UserService.create({ name, email, password, role });

    return res.status(200).json({
      message: "user create",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

//actualiza los datos del usuario
const updateDataUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;
    const user = await UserService.findUserById(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `error in data id: ${id} not found`,
      });
    }

    const userUpdate = await UserService.updateUser(user, {
      name,
      email,
      role,
    });

    return res.status(200).json({
      message: "connect",
      userUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

//cambia el status a disable
const deleteUSers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.findUserById(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `error in data id: ${id} not found`,
      });
    }

    const userDisable = await UserService.deleteUSers(user);

    return res.status(200).json({
      message: "user disable",
      userDisable,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

module.exports = {
  findAllUsers,
  getUserById,
  createUsers,
  updateDataUsers,
  deleteUSers,
};
