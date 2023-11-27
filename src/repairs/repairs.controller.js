const UsersService = require("../users/users.service");
const RepairsService = require("./repairs.service");

const findRepairs = async (req, res) => {
  try {
    const repairs = await RepairsService.findAllRepairs();
    return res.status(200).json({
      message: "find all repairs",
      repairs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

const findRepairsById = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await RepairsService.findRepairById(id);

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `error in data id: ${id} not found`,
      });
    }

    return res.status(200).json({
      message: "find repairs",
      repair,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

const createRepair = async (req, res) => {
  try {
    const { userId, date } = req.body;
    const user = await UsersService.findUserById(userId);
    const repair = await RepairsService.createRepair({ userId, date });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `error in data id: ${userId} not found`,
      });
    }

    return res.status(200).json({
      message: "repairs create",
      repair,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await RepairsService.findRepairById(id);

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `error in data id: ${id} not found`,
      });
    }

    const statusRepair = await RepairsService.repairsComplete(repair);

    return res.status(200).json({
      message: "status complete",
      status: statusRepair,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await RepairsService.findRepairById(id);

    if (!repair || repair.status == "completed") {
      return res.status(404).json({
        status: "error",
        message: `error in data id: ${id} not found`,
      });
    }

    const statusRepair = await RepairsService.repairsDelete(repair);

    return res.status(200).json({
      message: "status delete",
      statusRepair,
    });
  } catch (error) {
    return res.status(500).json({
      message: "fail conection",
      error: `${error}`,
    });
  }
};

module.exports = {
  findRepairs,
  findRepairsById,
  createRepair,
  updateRepair,
  deleteRepair,
};
