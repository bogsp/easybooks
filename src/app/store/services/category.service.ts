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
    StartEdit,
    StopEdit,
    Update,
    FetchAllTypes,
} from '../actions/category.actions';
import { Category } from '../models';

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
            .subscribe(state => {
                this.items = state.items;
                this.items.forEach(arr => {
                    this.store.dispatch(new FetchAllTypes(arr.id));
                });
            });

        this.isAuth = this.authService.isAuth;
        if (!this.isAuth) { this.unsub(); }
    }

    fetchAll() {
        this.store.dispatch(new FetchAll());
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
