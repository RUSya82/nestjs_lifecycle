import {NestMiddleware} from "@nestjs/common";
import {Request, Response, NextFunction} from 'express'
export class UserMiddleware2 implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        // console.log('User Middleware 2 called');
        next();
    }
}