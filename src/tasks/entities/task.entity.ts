import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column({default: ''})
	description: string;
	@Column({default: false})
	isCompleted: boolean;

	@ManyToOne(()=> User, (user) => user.tasks)
	user: User
}
