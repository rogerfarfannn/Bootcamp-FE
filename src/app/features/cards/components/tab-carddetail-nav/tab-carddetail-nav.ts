import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab-carddetail-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-carddetail-nav.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tab-carddetail-nav.css',
})
export class TabCarddetailNav {}
