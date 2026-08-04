import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        return throwError(() => new Error('Unable to connect to the server.'));
      }

      return throwError(() => error);
    })
  );