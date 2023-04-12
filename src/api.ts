import express, { Express, Request, Response, NextFunction } from "express";
interface API
{
   server: Express;
   middlewares: () => void;
   routes: () => void;
};

// the api class 
class api implements API
{
   public server: Express = express();

   public middlewares: () => void = () =>
   {
      this.server.use(express.json());
   };

   public routes: () => void = () =>
   {
      this.server.use((req: Request, res: Response, next: NextFunction) =>
      {
         res.status(404).json({
            "error": "Page Not Found"
         });
      });
   };

   constructor()
   {

   }
}

const apiServer = new api().server;
export { apiServer };
