import { Router } from 'express';
import JalanServices from './jalan.services';
// import { JalanTypes } from './jalan.types';

export default class JalanController {
  public path = '/jalan';

  public router: Router = Router();

  private jalanService: JalanServices = new JalanServices();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.jalanService.getAll);
    this.router.get(`${this.path}/:id`, this.jalanService.getId);
  }
}
