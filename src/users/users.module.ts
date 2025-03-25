import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserMiddleware1 } from './user.middleware';
import { UserMiddleware2 } from './user.middleware2';

@Module({
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule implements NestModule{
	configure(consumer: MiddlewareConsumer): any {
		consumer
			.apply(UserMiddleware2, UserMiddleware1)
			.forRoutes('*')
	}
}
