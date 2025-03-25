import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppModuleMiddleware } from './appModule.middleware';

@Module({
	imports: [UsersModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule{
	configure(consumer: MiddlewareConsumer): any {
		consumer
			.apply(AppModuleMiddleware)
			.forRoutes('*')
	}
}
