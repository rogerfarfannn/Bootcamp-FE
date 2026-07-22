import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { CardDetailService } from "../services/card-detail.service";
import { catchError } from "rxjs";
import Swal from "sweetalert2";

export const cardDetailResolverFn: ResolveFn<unknown> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    const cardDetailService = inject(CardDetailService);
    const id = route.paramMap.get('id') ?? "";
    cardDetailService.id.set(id);
    
    return cardDetailService.getCard(id).pipe(
        catchError(err => {
            Swal.fire({
                        icon: 'error',
                        title: 'Card Was not Found',
                        text: 'Please Verify the Card Id',
                        customClass:{
                            confirmButton: "custom-alert-button",
                        },
                        theme: "dark"
                    });
                    return router.navigate(['/']);
        })
    );
}
