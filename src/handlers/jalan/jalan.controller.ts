import { Request, Response, Router } from 'express';
import pool from '@services/db';
// import { JalanTypes } from './jalan.types';

export default class JalanController {
    public path = '/jalan';

    public router: Router = Router();

    constructor() {
      this.initializeRoutes();
    }

    public initializeRoutes(): void {
      this.router.get(this.path, this.getAll);
      this.router.get(`${this.path}/:id`, this.getId);
    }

    getAll= async (req: Request, res: Response): Promise<void> => {
      const [rows, fields] = await pool.execute('SELECT * FROM jalan');

      res.send({
        fields: fields.map((field) => field.name),
        data: rows,
      });
    }

    getId = async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      const [rows, fields] = await pool.execute('SELECT * FROM jalan WHERE id_jalan = ?', [id]);

      res.send({
        fields: fields.map((field) => field.name),
        data: rows,
      });
    }
}
