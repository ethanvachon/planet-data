import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class SpeciesPlanetsService {
  async getSpeciesByPlanet(id) {
    return await dbContext.SpeciesPlanets.find(id).populate("species")
  }
  async getPlanetBySpecies(id) {
    return await dbContext.SpeciesPlanets.find(id).populate("planet")
  }
  async create(data) {
    return dbContext.SpeciesPlanets.create(data)
  }
  async delete(id) {
    let deleted = dbContext.SpeciesPlanets.findByIdAndDelete(id)
    if (!deleted) {
      throw new BadRequest('invalid id')
    }
    return deleted
  }
}

export const speciesPlanetsService = new SpeciesPlanetsService()