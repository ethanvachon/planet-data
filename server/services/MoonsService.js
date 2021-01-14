import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class MoonsService {
  async getAll(query) {
    return dbContext.Moons.find(query).populate("planet")
  }
  async getOne(id) {
    let data = dbContext.Moons.findById(id).populate("planet")
    if (!data) {
      throw new BadRequest("invalid id")
    }
    return data
  }
  async create(data) {
    return dbContext.Moons.create(data)
  }
  async edit(body, id) {
    let edited = dbContext.Moons.findByIdAndUpdate(id, body, { new: true })
    if (!edited) {
      throw new BadRequest('invalid id')
    }
    return edited
  }
  async delete(id) {
    let deleted = dbContext.Moons.findByIdAndDelete(id)
    if (!deleted) {
      throw new BadRequest('invalid id')
    }
    return deleted
  }
}

export const moonsService = new MoonsService()