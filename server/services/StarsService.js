import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class StarsService {
  async getAll(query) {
    return dbContext.Stars.find(query).populate("galaxy")
  }
  async getOne(id) {
    let data = dbContext.Stars.findById(id).populate("galaxy")
    if (!data) {
      throw new BadRequest("invalid id")
    }
    return data
  }
  async create(data) {
    return dbContext.Stars.create(data)
  }
  async edit(body, id) {
    let edited = dbContext.Stars.findByIdAndUpdate(id, body, { new: true })
    if (!edited) {
      throw new BadRequest('invalid id')
    }
    return edited
  }
  async delete(id) {
    let deleted = dbContext.Stars.findByIdAndDelete(id)
    if (!deleted) {
      throw new BadRequest('invalid id')
    }
    return deleted
  }
}

export const starsService = new StarsService()