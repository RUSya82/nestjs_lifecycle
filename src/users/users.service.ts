import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../tasks/entities/task.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>
	) {
	}
	create(createUserDto: CreateUserDto) {
		return this.userRepository.save(createUserDto);
	}

	findAll(asc: boolean) {
		return this.userRepository.find({relations: ["tasks"]});
	}

	findOne(id: number) {
		return this.userRepository.findOneBy({id});
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return this.userRepository.update(id, updateUserDto);
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
