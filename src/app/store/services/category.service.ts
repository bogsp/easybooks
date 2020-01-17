import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, take } from 'rxjs/operators';
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
    Update
} from '../actions/category.actions';
import { Category } from '../models';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private subs = new SubSink();
    isAuth: boolean;
    item: Category;
    items: Category[];
    itemId: string;
    isEditing: boolean;
    isLoading: boolean;
    error: { header: string; message: string };

    constructor(
        private store: Store<AppState>,
        private authService: AuthService
    ) {

        this.subs.add(
            this.store
                .select('category')
                .pipe(map(state => state.items))
                .subscribe(items => {
                    this.items = items;
                }),

            this.store
                .select('category')
                .pipe(map(state => state.item))
                .subscribe(item => {
                    this.item = item;
                }),

            this.store
                .select('category')
                .pipe(map(state => state.itemId))
                .subscribe(itemId => {
                    this.itemId = itemId;
                }),

            this.store
                .select('category')
                .pipe(map(state => state.isEditing))
                .subscribe(isEditing => {
                    this.isEditing = isEditing;
                }),

            this.store
                .select('category')
                .pipe(map(state => state.isLoading))
                .subscribe(loading => {
                    this.isLoading = loading;
                }),

            this.store
                .select('category')
                .pipe(map(state => state.error))
                .subscribe(error => {
                    this.error = error;
                })
        );

        this.isAuth = this.authService.isAuth;
        if (!this.isAuth) {
            this.unsub();
        }
    }

    getItem() { return this.item; }

    getItems() { return this.items; }

    getItemId() { return this.itemId; }

    getIsEditing() { return this.isEditing; }

    getIsLoading() { return of(this.isLoading); }

    getError() { return this.error; }

    fetchAll() { this.store.dispatch(new FetchAll()); }

    fetchAllTypes(id: string) { this.store.dispatch(new FetchAllTypes(id)); }

    fetch(id: string) { this.store.dispatch(new Fetch(id)); }

    add(item: Category) { this.store.dispatch(new Add(item)); }

    addCustom(item: Category) { this.store.dispatch(new AddCustom(item)); }

    update(item: Category) { this.store.dispatch(new Update(item)); }

    delete(id: string) { this.store.dispatch(new Delete(id)); }

    startEdit() { this.store.dispatch(new StartEdit()); }

    stoptEdit() { this.store.dispatch(new StopEdit()); }

    unsub() { this.subs.unsubscribe(); }

}
