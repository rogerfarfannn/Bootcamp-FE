import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { mapHttpError } from "../mappers/api-error.mapper";
import Swal from "sweetalert2";

export const errorInterceptor : HttpInterceptorFn = (req, next) => {

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      const apiError = mapHttpError(error);

      Swal.fire({
        icon: 'error',
        title: "Error",
        text: apiError.friendlyMessage,
        customClass: {
          confirmButton: 'custom-alert-button',
        },
        theme: 'dark',
      });

      return throwError(() => apiError);

    })

  );

};