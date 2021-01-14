import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class GalaxiesService {
  async getAll(query) {
    return dbContext.Galaxies.find(query)
  }
  async getOne(id) {
    let data = dbContext.Galaxies.findById(id)
    if (!data) {
      throw new BadRequest("invalid id")
    }
    return data
  }
  async create(data) {
    return dbContext.Galaxies.create(data)
  }
  async edit(body, id) {
    let edited = dbContext.Galaxies.findByIdAndUpdate(id, body, { new: true })
    if (!edited) {
      throw new BadRequest('invalid id')
    }
    return edited
  }
  async delete(id) {
    let deleted = dbContext.Galaxies.findByIdAndDelete(id)
    if (!deleted) {
      throw new BadRequest('invalid id')
    }
    return deleted
  }
}

export const galaxiesService = new GalaxiesService()