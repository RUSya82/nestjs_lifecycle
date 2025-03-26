import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ExampleInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		console.log('ExampleInterceptor before request...');

		return next.handle().pipe(
			tap((data) => console.log('ExampleInterceptor after response...')),
		);
	}
}