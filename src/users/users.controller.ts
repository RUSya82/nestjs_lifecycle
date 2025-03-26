import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete, ParseBoolPipe, Query, DefaultValuePipe, ParseIntPipe, HttpStatus, UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MyParseIntPipe } from './pipes/myParseInt.pipe';
import { IsMongoIdPipe } from './pipes/isMongoId.pipe';
import { RoleGuard } from './guards/role.guard';
import { AuthGuard } from './guards/auth.guard';
import { Roles } from './roles.decorator';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto);
	}


	// Пример использования DefaultValuePipe, совместно с ParseBoolPipe
	@Get()
	@UseGuards(AuthGuard, RoleGuard)
	@Roles(['admin'])
	findAll(@Query('asc', new DefaultValuePipe(true), ParseBoolPipe) asc: boolean) {
		return this.usersService.findAll(asc);
	}

	// Пример использования ParseIntPipe с созданием экземпляра и передачей параметров
	//
	@Get(':id')
	findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST})) id: string) {
		return this.usersService.findOne(+id);
	}

	// Пример использования своего Pipe - MyParseIntPipe для преобразования
	@Patch(':id')
	update(@Param('id', MyParseIntPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(+id, updateUserDto);
	}

	// Пример использования IsMongoIdPipe для валидации передаваемого параметра
	@Delete(':id')
	remove(@Param('id', IsMongoIdPipe) id: string) {
		return this.usersService.remove(+id);
	}
}
