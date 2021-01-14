import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class SpeciesService {
  async getAll(query) {
    return dbContext.Species.find(query)
  }
  async getOne(id) {
    let data = dbContext.Species.findById(id)
    if (!data) {
      throw new BadRequest("invalid id")
    }
    return data
  }
  async create(data) {
    return dbContext.Species.create(data)
  }
  async edit(body, id) {
    let edited = dbContext.Species.findByIdAndUpdate(id, body, { new: true })
    if (!edited) {
      throw new BadRequest('invalid id')
    }
    return edited
  }
  async delete(id) {
    let deleted = dbContext.Species.findByIdAndDelete(id)
    if (!deleted) {
      throw new BadRequest('invalid id')
    }
    return deleted
  }
}

export const speciesService = new SpeciesService()