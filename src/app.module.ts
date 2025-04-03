import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppModuleMiddleware } from './appModule.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';

@Module({
	imports: [
		UsersModule,
		TypeOrmModule.forRoot({
			type:"sqlite",
			database: "db.sqlite",
			entities: [User, Task],
			synchronize: true   //Синхронизирует изменения в БД
		}),
		TasksModule
	],
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
