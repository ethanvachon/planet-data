import { moonsService } from "../services/MoonsService"
import BaseController from "../utils/BaseController";

export class MoonsController extends BaseController {
  constructor() {
    super("api/moons")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await moonsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await moonsService.getOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await moonsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await moonsService.edit(req.body, req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await moonsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}