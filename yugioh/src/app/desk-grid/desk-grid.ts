import { Component } from "@angular/core";
import { CardDesk } from "../card-desk/card-desk";

@Component({
    templateUrl : "./desk-grid.html",
    selector: "desktop-grid",
    styleUrl: "./desk-grid.css",
    imports: [CardDesk]
})
export class DeskGrid {

}