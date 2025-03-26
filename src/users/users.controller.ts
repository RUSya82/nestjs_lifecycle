import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete, ParseBoolPipe, Query, DefaultValuePipe, ParseIntPipe, HttpStatus, UseGuards, UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MyParseIntPipe } from './pipes/myParseInt.pipe';
import { IsMongoIdPipe } from './pipes/isMongoId.pipe';
import { RoleGuard } from './guards/role.guard';
import { AuthGuard } from './guards/auth.guard';
import { Roles } from './roles.decorator';
import { ExampleInterceptor } from './interceptors/example.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Controller('users')
// @UseInterceptors(LoggingInterceptor)
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto);
	}


	// Пример использования DefaultValuePipe, совместно с ParseBoolPipe
	@Get()
	@UseGuards(AuthGuard, RoleGuard)
	@UseInterceptors(ExampleInterceptor)
	@Roles(['admin'])
	findAll(@Query('asc', new DefaultValuePipe(true), ParseBoolPipe) asc: boolean) {
		return this.usersService.findAll(asc);
	}

	@Get(':id')
	@UseGuards(AuthGuard)
	@UseInterceptors(ExampleInterceptor)
	findOne(@Param('id', MyParseIntPipe) id: string) {
		console.log('Controller Called');
		return this.usersService.findOne(+id);
	}

	// Пример использования своего Pipe - MyParseIntPipe для преобразования
	@Patch(':id')
	@UseGuards(AuthGuard, RoleGuard)
	@UseInterceptors(ExampleInterceptor)
	@Roles(['admin'])
	update(@Param('id', MyParseIntPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(+id, updateUserDto);
	}

	// Пример использования IsMongoIdPipe для валидации передаваемого параметра
	@Delete(':id')
	remove(@Param('id', IsMongoIdPipe) id: string) {
		return this.usersService.remove(+id);
	}
}
