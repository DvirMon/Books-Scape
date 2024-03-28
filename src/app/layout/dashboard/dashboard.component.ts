import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Signal, inject, input } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AppStore } from '../../store/store';

@Component({
  selector: 'books-scape-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RouterModule,
    TitleCasePipe,
    UpperCasePipe,
    MatToolbar,
    MatButton,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatSidenavContent,
    MatSidenavContainer,
    MatIconModule,
    MatIconButton,
    MatBadgeModule,
  ],
})
export class DashboardComponent {
  #store = inject(AppStore);

  showNavigation = input<boolean>(false);
  showShopping = input<boolean>(true);

  protected readonly title: string = 'the books scape';

  public readonly shelfSize: Signal<string> = this.#store.shelfSize;
}
