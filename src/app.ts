import "reflect-metadata";

import express, {Request, Response} from 'express';

import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();

import Routes from "./routes";
import database from "./database";

class Server {
  private app: express.Application;

  constructor(){
    this.app = express(); // init the application
    this.configuration();
    this.routes();
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment 
   * variables it takes the default port 3000
   */
  public configuration() {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  /**
   * Method to configure the routes
   */
  public async routes(){
    
    await database.getConnection();
    
    this.app.get( "/api", (req: Request, res: Response ) => {
      res.send( "Hello world!" );
    });
    this.app.use(Routes);

  }

  /**
   * Used to start the server
   */
  public start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }
}

const server = new Server(); // Create server instance
server.start(); // Execute the server