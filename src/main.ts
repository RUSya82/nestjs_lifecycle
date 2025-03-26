import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalMiddleware } from './global.middlerware';
import { HeadersInterceptor } from './users/interceptors/headers.interceptor';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	// const globalMiddleware = new GlobalMiddleware();
	// app.use(globalMiddleware.use.bind(GlobalMiddleware));
	// app.useGlobalInterceptors(new HeadersInterceptor())
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
