import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';

import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from '@dom';
import { Book } from '../books/books';

const COLLECTION = 'books';

type BooksLoader = Loader<string, Entity, 'loadBooks'>;

export function withBooks(Loader: LoaderService<BooksLoader>) {
  return signalStoreFeature(
    withEntities({ entity: type<Book>(), collection: COLLECTION }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadBooks');
      return {
        loadBooks: loadEntities(loader, state, COLLECTION),
      };
    })
  );
}
