import {IsBoolean, IsOptional, IsString} from "class-validator";
import {Optional} from "@nestjs/common";
import { User } from '../../users/entities/user.entity';

export class CreateTaskDto {
	@IsString()
	title: string;
	@IsString()
	description: string;
	@IsBoolean()
	@Optional()
	isCompleted?: boolean;

	@IsOptional()
	user?: User
}
