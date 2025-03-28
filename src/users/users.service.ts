import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	create(createUserDto: CreateUserDto) {
		return 'This action adds a new user';
	}

	findAll(asc: boolean) {
		return `This action returns all users. ASC: ${asc}`;
	}

	findOne(id: number) {
		console.log('Service Called');
		return `This action returns a #${id} user`;
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
