import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Searchbox } from '../searchbox/searchbox';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navbar.css',
})
export class Navbar {}
