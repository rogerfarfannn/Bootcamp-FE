import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { CardsFavoriteService } from "../services/cards-favorite.service";
import Swal from "sweetalert2";

export const favoritesGuard: CanActivateFn = () => {
    const cardsFavoriteService = inject(CardsFavoriteService);
    const router = inject(Router);

    if (cardsFavoriteService.favoriteCards().length > 0) {
        return true;
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Section not allowed',
            text: 'You must mark at least one card as favorite to enter to this section',
            customClass:{
                confirmButton: "custom-alert-button",
            },
            theme: "dark"
        });
        return router.navigate(['/']);

    }
}