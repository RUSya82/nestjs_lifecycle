import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Roles} from "../roles.decorator";
@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private reflector: Reflector) {
    }
    canActivate(context: ExecutionContext) {
        console.log(`Roles Guard Called`)
        //получаем метадату из обработчика роута (это будет массив)
        const roles = this.reflector.get(Roles, context.getHandler());
        //если ролей для роута не требуется, разрешаем
        if(!roles){
            return true;
        }
        //получаем user из объекта запроса, который установили в AuthGuard
        const {user} = context.switchToHttp().getRequest();
        //проверяем в массиве roles
        return roles.includes(user);//эта логика тоже может быть сложнее
    }
}