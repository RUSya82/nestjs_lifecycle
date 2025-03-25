import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class UserMiddleware1 implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
    console.log('User Middleware 1 called');
		next();
	}
}