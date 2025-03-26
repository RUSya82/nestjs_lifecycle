import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";

@Injectable()
export class MyParseIntPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata): any {
        console.log('ParseInt PIPE called')
        const intValue = parseInt(value, 10);
        if(isNaN(intValue)){
            throw new BadRequestException(`${value} is not number`)
        }
        return intValue;
    }
}