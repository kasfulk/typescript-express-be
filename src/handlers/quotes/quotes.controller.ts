import { Request, Response, Router } from 'express';
import { Quotes } from './quotes.types';

export default class QuotesController {
    public path = '/quotes';

    public router: Router = Router();

    private quotes: Quotes[] = [
      {
        id: 1,
        author: 'Soekarno',
        content: 'Sekali merdeka tetap merdeka',
      },
      {
        id: 2,
        author: 'Puan Maharani',
        content: 'Kepak Sayap Kebhinekaan',
      },
    ];

    constructor() {
      this.initializeRoutes();
    }

    public initializeRoutes(): void {
      this.router.get(this.path, this.getAll);
    }

    getAll = (req: Request, res: Response):void => {
      res.send(this.quotes);
    }
}
