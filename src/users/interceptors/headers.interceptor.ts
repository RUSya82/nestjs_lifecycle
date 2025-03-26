import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HeadersInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const httpContext = context.switchToHttp();
		const response = httpContext.getResponse();

		return next.handle().pipe(
			tap(() => {
				response.setHeader('X-Custom-Header', 'Cats is beautiful!');
			}),
		);
	}
}