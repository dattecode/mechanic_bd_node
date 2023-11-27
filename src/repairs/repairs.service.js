const Repairs = require("./repairs.model");

class RepairsService {
  static async createRepair(data) {
    return await Repairs.create(data);
  }

  static async findAllRepairs() {
    return await Repairs.findAll({
      where: {
        status: "pending",
      },
    });
  }

  static async findRepairById(id) {
    return await Repairs.findOne({
      where: {
        id: id,
        status: "pending",
      },
    });
  }

  static async repairsComplete(user) {
    return await user.update({
      status: "completed",
    });
  }

  static async repairsDelete(user) {
    return await user.update({
      status:"cancelled"
    })
  }
}

module.exports = RepairsService