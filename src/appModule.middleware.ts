import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class AppModuleMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		// console.log('AppModule Middleware called');
		next();
	}
}
