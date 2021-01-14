import { galaxiesService } from "../services/GalaxiesService"
import { starsService } from "../services/StarsService"
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .get("/:id/stars", this.getStars)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await galaxiesService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await galaxiesService.getOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async getStars(req, res, next) {
    try {
      res.send(await starsService.getAll({ galaxy: req.params.id }))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await galaxiesService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await galaxiesService.edit(req.body, req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await galaxiesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}