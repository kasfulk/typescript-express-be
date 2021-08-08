import express, { Application } from 'express';
import cors from 'cors';

export default class App {
    public app: Application;

    public port: number;

    constructor(controllers, port:number) {
      this.app = express();
      this.port = port;

      this.initializeMiddleware();
      this.initializeController(controllers);
    }

    private initializeMiddleware():void {
      this.app.use(express.json());
      this.app.use(cors());
    }

    private initializeController(controllers) {
      controllers.forEach((controller) => {
        this.app.use('/', controller.router);
      });
    }

    public listen() {
      this.app.listen(this.port, () => {
        console.log(`This service listening on port ${this.port}`);
      });
    }
}
