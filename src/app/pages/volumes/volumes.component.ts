import {
  Component,
  Injector,
  Signal,
  inject,
  runInInjectionContext,
} from '@angular/core';

import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { SearchInputComponent } from '@dom/components';
import { patchState } from '@ngrx/signals';
import { BookCardComponent } from '../../books/book-card/book-card.component';
import { Book } from '../../books/books';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';
import { AppStore } from '../../store/store';

@Component({
  selector: 'books-scape-volume-page',
  standalone: true,
  imports: [
    JsonPipe,
    DashboardComponent,
    BookCardComponent,
    SearchInputComponent,
  ],
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss'],
})
export class VolumesPageComponent {
  #store = inject(AppStore);
  #injector = inject(Injector);

  public readonly books: Signal<Book[]>;
  public readonly initialValue: Signal<string>;

  constructor() {
    this.books = this.#store.volumesEntities;
    this.initialValue = this.#store.searchTerm;
  }

  onTermChanged(value: string): void {
    patchState(this.#store, { searchTerm: value });
  }

  onAddToShelf(newBook: Book): void {
    this.#store.addToShelf(newBook);
  }

  onInfo(volId: string): void {
    runInInjectionContext(this.#injector, () =>
      inject(Router).navigateByUrl(`info/${volId}`)
    );
  }
}
