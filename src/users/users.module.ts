import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserMiddleware1 } from './user.middleware';
import { UserMiddleware2 } from './user.middleware2';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [UsersController],
	providers: [UsersService],
	exports:[UsersService]
})
export class UsersModule implements NestModule{
	configure(consumer: MiddlewareConsumer): any {
		consumer
			.apply(UserMiddleware2, UserMiddleware1)
			.forRoutes('*')
	}
}
