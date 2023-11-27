const Users = require("./users.models")

class UsersService {
  static async create(data) {
    return await Users.create(data)
  }

  static async findUsers() {
    return await Users.findAll({
      where:{
        status:"active"
      }
    })
  }

  static async findUserById(id){
    return await Users.findOne({
      where:{
        id:id,
        status:"active"
      }
    })
  }

  static async updateUser(user, data){
    return await user.update(data)
  }

  static async deleteUSers(user){
    return await user.update({
      status:"disable"
    })
  }

}

module.exports = UsersService