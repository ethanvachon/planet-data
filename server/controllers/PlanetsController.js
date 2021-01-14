import { planetsService } from "../services/PlanetsService"
import { moonsService } from "../services/MoonsService"
import { speciesPlanetsService } from "../services/SpeciesPlanetsService"
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .get("/:id/moons", this.getMoons)
      .get("/:id/species", this.getSpecies)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await planetsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await planetsService.getOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getMoons(req, res, next) {
    try {
      res.send(await moonsService.getAll({ planet: req.params.id }))
    } catch (error) {
      next(error)
    }
  }
  async getSpecies(req, res, next) {
    try {
      res.send(await speciesPlanetsService.getSpeciesByPlanet({ planet: req.params.id }))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await planetsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await planetsService.edit(req.body, req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await planetsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}