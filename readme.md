export class Searchbox {
   search = output<string>();

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}


//interpolación, attribute binding, function binding:

 <button
        class="page-btn"
        [disabled]="currentPage() === 1"
        (click)="goPreviousPage()">
        ← Previous
    </button>

    <span class="page-info">
        Page {{ currentPage() }} of {{ totalPages() }}
    </span>

    <button
        class="page-btn"
        [disabled]="currentPage === totalPages"
        (click)="goNextPage()">
        Next →
    </button>