import { Request, Response, NextFunction } from 'express';
import prisma from '@/prisma';

export class UserController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, user_name } = req.body; // req body email dan user_name hanya butuh email dan user_name

      const existing_email = await prisma.userCustomers.findUnique({
        where: { email: email },
      });
      // email tersedia ketika email sudah ada pada database
      if (existing_email) {
        throw new Error('Email is already exist');
      }

      // ketika membuat user baru hanya mengisi atau create email dan user_name saja
      const newUser = await prisma.userCustomers.create({
        data: { email: req.body.email, user_name: req.body.user_name },
      });
      return res.status(200).send({
        succes: true,
        email: newUser.email,
        user_name: newUser.user_name,
        message: 'Create user success next create password',
      });
    } catch (err: any) {
      console.log(err);
    }
  }

  async createPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      // untuk checking user ada atau tidak ketika didalam database
      const checkingUser = await prisma.userCustomers.findFirst({
        // yang dimna email yang dicheck
        where: { email: email },
      });
      // condition yang dimana user dicheck jika tidak ada akan memberikan condition ini
      if (!checkingUser) {
        throw new Error('Email not Found');
      }

      return res.status(200).send({
        success: true,
        message: 'Created Password Success',
      });
    } catch (err: any) {
      next(err);
    }
  }
}
