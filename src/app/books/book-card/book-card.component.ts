import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output, input, signal } from '@angular/core';
import {
  MatButton,
  MatIconButton,
  MatMiniFabButton,
} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { Book } from '../books';

@Component({
  selector: 'books-scape-book-card',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    MatCardModule,
    MatButton,
    MatMiniFabButton,
    MatIconButton,
    MatIcon,
    TruncatePipe,
  ],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  book = input.required<Book>();
  showOverlay = signal(false);

  @Output() addSelected: EventEmitter<Book> = new EventEmitter();
  @Output() infoSelected: EventEmitter<string> = new EventEmitter();

  onAddToShelf(value: Book) {
    this.addSelected.emit(value);
  }

  onInfo(value: Book) {
    this.infoSelected.emit(value.id);
  }

  onToggleOverlay() {
    this.showOverlay.update((value) => !value);
  }
}
