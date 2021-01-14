import { speciesService } from "../services/SpeciesService"
import { speciesPlanetsService } from "../services/SpeciesPlanetsService"
import BaseController from "../utils/BaseController";

export class SpeciesController extends BaseController {
  constructor() {
    super("api/species")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .get("/:id/planets", this.getPlanets)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await speciesService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await speciesService.getOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getPlanets(req, res, next) {
    res.send(await speciesPlanetsService.getPlanetBySpecies({ species: req.params.id }))
  }
  async create(req, res, next) {
    try {
      res.send(await speciesService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await speciesService.edit(req.body, req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await speciesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}