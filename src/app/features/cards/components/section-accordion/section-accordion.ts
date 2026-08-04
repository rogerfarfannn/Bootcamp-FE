import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { LoadingSpinner } from '../../../../shared/components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-section-accordion',
  imports: [LoadingSpinner],
  templateUrl: './section-accordion.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './section-accordion.css',
})
export class SectionAccordion {
  sectionName = input('Section');
}
