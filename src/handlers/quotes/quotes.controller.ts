import express, { Request, Response, Router } from 'express';
import { Quotes } from './quotes.types';

class QuotesController {
    public path = '/quotes';

    public router: Router = express.Router();

    private quotes: Quotes[] = [
      {
        id: 1,
        author: 'Soekarno',
        content: 'Sekali merdeka tetap merdeka',
      },
      {
        id: 2,
        author: 'Puan Maharani',
        conten: 'Kepak Sayap Kebhinekaan',
      },
    ];

    constructor() {

    }

    public initializeRoutes(): void {
      this.router.get(this.path, this.getAll);
    }

    getAll = (req: Request, res: Response) => {
      res.send(this.quotes);
    }
}

export default QuotesController;
