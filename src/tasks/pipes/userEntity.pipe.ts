import {ArgumentMetadata, BadRequestException, Injectable, NotFoundException, PipeTransform} from "@nestjs/common";
import { UsersService } from '../../users/users.service';


@Injectable()
export class UserEntityPipe implements PipeTransform{
    constructor(
        private userService: UsersService
    ) {
    }
    async transform(value: string, metadata: ArgumentMetadata): Promise<any> {
        if(value)
            return  this.userService.findOne(+value);
        return null;
    }
}