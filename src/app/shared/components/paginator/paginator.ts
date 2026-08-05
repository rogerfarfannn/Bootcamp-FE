import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './paginator.css',
})
export class Paginator {
  currentPage = input(1);
  totalPages = input(1);

  pageChange = output<number>();

  goPreviousPage() {
    if (this.currentPage() > 1) {
      this.pageChange.emit(this.currentPage() - 1);
    }
  }

  goNextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.pageChange.emit(this.currentPage() + 1);
    }
  }
}
