import { starsService } from "../services/StarsService"
import { planetsService } from "../services/PlanetsService"
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController {
  constructor() {
    super("api/stars")
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
      res.send(await starsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await starsService.getOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getPlanets(req, res, next) {
    try {
      res.send(await planetsService.getAll({ star: req.params.id }))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await starsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await starsService.edit(req.body, req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await starsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}