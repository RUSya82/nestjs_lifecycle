import {ArgumentMetadata,  Injectable,  PipeTransform} from "@nestjs/common";
import { UsersService } from '../../users/users.service';


@Injectable()
export class UserEntityPipe implements PipeTransform{
    constructor(
        private userService: UsersService
    ) {
    }
    async transform(value: number, metadata: ArgumentMetadata): Promise<any> {
        if(value)
            return  this.userService.findOne(value);
        return null;
    }
}