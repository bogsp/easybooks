import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import { AppState } from '..';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private subs = new SubSink();
    isAuth: boolean;
    currency: string;
    listview: string;

    constructor(
        private store: Store<AppState>,
        private authService: AuthService
    ) {
        this.subs.add(
            this.store
                .select('settings')
                .pipe(map(state => state.currency))
                .subscribe(currency => { this.currency = currency; }),

            this.store
                .select('settings')
                .pipe(map(state => state.listview))
                .subscribe(listview => { this.listview = listview; })
        );

        this.isAuth = this.authService.isAuth;
        if (!this.isAuth) { this.unsub(); }
    }

    unsub() { this.subs.unsubscribe(); }
}
