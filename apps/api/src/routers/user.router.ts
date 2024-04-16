// import { UserController } from '@/controllers/User.controller';
import { UserController } from '@/controllers/user.controller';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userContoller: UserController;

  constructor() {
    this.userContoller = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post('/register-user', this.userContoller.registerUser);
    this.router.post('/create-password', this.userContoller.createPassword);
  }

  getRouter(): Router {
    return this.router;
  }
}
