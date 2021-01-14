import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PlanetsService {
  async getAll(query) {
    return dbContext.Planets.find(query).populate("star")
  }
  async getOne(id) {
    let data = dbContext.Planets.findById(id).populate("star")
    if (!data) {
      throw new BadRequest("invalid id")
    }
    return data
  }
  async create(data) {
    return dbContext.Planets.create(data)
  }
  async edit(body, id) {
    let edited = dbContext.Planets.findByIdAndUpdate(id, body, { new: true })
    if (!edited) {
      throw new BadRequest('invalid id')
    }
    return edited
  }
  async delete(id) {
    let deleted = dbContext.Planets.findByIdAndDelete(id)
    if (!deleted) {
      throw new BadRequest('invalid id')
    }
    return deleted
  }
}

export const planetsService = new PlanetsService()