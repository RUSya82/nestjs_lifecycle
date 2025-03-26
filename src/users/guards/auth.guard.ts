import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext) {
        console.log('AUTH GUARD called: ' + Date.now());

        const request = context.switchToHttp().getRequest();
        const role = request.headers['token'];
        //тут может быть логика проверки токена и определение роли
        //но мы упростим...
        if(role === 'cat'){
            request.user = 'admin'
        }
        return role === 'cat';
    }
}