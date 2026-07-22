import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-accordion',
  imports: [],
  templateUrl: './section-accordion.html',
  styleUrl: './section-accordion.css',
})
export class SectionAccordion {
  sectionName = input("Section");
}
