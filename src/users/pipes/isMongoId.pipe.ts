import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { isMongoId } from 'class-validator';

@Injectable()
export class IsMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (metadata.type === 'param') {
      if (!isMongoId(value)) {
        throw new BadRequestException('Param ID must be a mongoID string');
      }
    }
    return value;
  }
}
