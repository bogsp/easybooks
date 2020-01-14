import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import { AppState } from '..';
import { AuthService } from './auth.service';
import {
    Add,
    AddCustom,
    Delete,
    Fetch,
    FetchAll,
    FetchAllTypes,
    StartEdit,
    StopEdit,
    Update,
} from '../actions/category.actions';
import { Category } from '../models';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private subs = new SubSink();
    isAuth: boolean;
    items: Category[];
    item: Category;
    id: string;

    constructor(
        private store: Store<AppState>,
        private authService: AuthService,
    ) {
        this.fetchAll();

        this.subs.sink = this.store.select('category')
            .pipe(
                take(2),
                map(state => {
                    this.items = state.items;
                    if (this.items.length > 0) {
                        this.items.forEach((c, i) => {
                            setTimeout(() => {
                                this.fetchAllTypes(c.id);
                            }, i * 1000);
                        });
                    }
                })
            )
            .subscribe();

        this.isAuth = this.authService.isAuth;
        if (!this.isAuth) { this.unsub(); }
    }

    fetchAll() {
        this.store.dispatch(new FetchAll());
    }

    fetchAllTypes(id: string) {
        this.store.dispatch(new FetchAllTypes(id));
    }

    fetch(id: string) {
        this.store.dispatch(new Fetch(id));
    }

    add(item: Category) {
        this.store.dispatch(new Add(item));
    }

    addCustom(item: Category) {
        this.store.dispatch(new AddCustom(item));
    }

    update(item: Category) {
        this.store.dispatch(new Update(item));
    }

    delete(id: string) {
        this.store.dispatch(new Delete(id));
    }

    startEdit() {
        this.store.dispatch(new StartEdit());
    }

    stoptEdit() {
        this.store.dispatch(new StopEdit());
    }

    unsub() {
        this.subs.unsubscribe();
    }

}
