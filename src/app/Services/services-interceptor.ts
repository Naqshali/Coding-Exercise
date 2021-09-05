import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

export class AppInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newRequest = req.clone({
            headers: req.headers.set('Authorization', 'token-here'),  // this can be used for auth with token when we we have to secure user 
            url: `https://6132387bab7b1e001799b3e6.mockapi.io/chat-box/${req.url}` // here will be the base url
        });

        return next.handle(newRequest).pipe(
            // Handle Errors
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        )
    }
    
}