import { Request, Response, Router } from 'express';

interface MessageHandler {
        message: string;
}

export default class Handler {
    public router: Router = Router();

    public path = '/';

    private responseMessageHandler: MessageHandler = {
      message: 'It\'s running well',
    }

    constructor() {
      this.initializeRoutes();
    }

    public initializeRoutes(): void {
      this.router.get(this.path, this.defaultResponse);
    }

    defaultResponse = (req: Request, res: Response):void => {
      res.send(this.responseMessageHandler);
    }
}
