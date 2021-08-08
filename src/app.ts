import express, { Application, json } from 'express';
import cors from 'cors';

export default class App {
    public app: Application;

    public port: number;

    constructor(controllers:any, port:number) {
      this.app = express();
      this.port = port;

      this.initializeMiddleware();
      this.initializeController(controllers);
    }

    private initializeMiddleware():void {
      this.app.use(json());
      this.app.use(cors());
    }

    private initializeController(controllers:any):void {
      controllers.forEach((controller:any) => {
        this.app.use('/', controller.router);
      });
    }

    public listen():void {
      this.app.listen(this.port, () => {
        console.log(`This service listening on port ${this.port}`);
      });
    }
}
