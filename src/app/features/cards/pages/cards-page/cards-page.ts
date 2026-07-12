import { Component } from '@angular/core';
import { CardList } from "../../components/card-list/card-list";
import { Searchbox } from "../../../../shared/components/searchbox/searchbox";
import { Paginator } from "../../../../shared/components/paginator/paginator";

@Component({
  selector: 'app-cards-page',
  imports: [CardList, Searchbox, Paginator],
  templateUrl: './cards-page.html',
  styleUrl: './cards-page.css',
})
export class CardsPage {}
