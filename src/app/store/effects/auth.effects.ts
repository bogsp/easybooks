import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import {
    ActionTypes,
    AuthFailed,
    AutoLogin,
    Login,
    LoginSuccess,
    Logout,
    Signup,
    SignupSuccess,
} from '../actions/auth.actions';

import { User } from '../models';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    localId: string;
    registered?: boolean;
}

const storeLocalData = (
    email: string,
    userId: string,
    token: string
) => {
    const user = new User(email, userId, token);
    localStorage.setItem('userData', JSON.stringify(user));
};

const handleError = (err: any) => {
    console.log(err.code);

    let errorRes = { header: 'Error!', message: 'An unknown error occured!' };

    if (err.code) {
        switch (err.code) {
            case 'no-user-data':
                errorRes = {
                    header: 'Auto Login Failed',
                    message: 'No user data found.'
                };
                break;
            case 'auto-login-failed':
                errorRes = {
                    header: 'Auto Login Failed',
                    message: 'Unable to login automatically.'
                };
                break;
            case 'auth/user-not-found':
                errorRes = {
                    header: 'Unregistered User',
                    message: 'Your account does not exist.'
                };
                break;
            case 'auth/email-already-in-use':
                errorRes = {
                    header: 'Account Exists',
                    message: 'You already have an existing account.'
                };
                break;
            case 'auth/invalid-email':
                errorRes = {
                    header: 'Invalid Email',
                    message: 'The email you entered is incorrect.'
                };
                break;
            case 'auth/wrong-password':
                errorRes = {
                    header: 'Incorrect Password',
                    message: 'The password you entered is incorrect.'
                };
                break;
        }
    }
    return errorRes;

};

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private afAuth: AngularFireAuth,
        private db: AngularFirestore
    ) { }

    @Effect()
    signup = this.actions$.pipe(
        ofType<Signup>(ActionTypes.SIGNUP),
        switchMap(async (action: Signup) => {
            return this.afAuth.auth.createUserWithEmailAndPassword(
                action.payload.email,
                action.payload.password
            )
                .then(res => {
                    storeLocalData(
                        res.user.email,
                        res.user.uid,
                        res.user.refreshToken
                    );
                    return new SignupSuccess({
                        email: res.user.email,
                        userId: res.user.uid,
                        token: res.user.refreshToken,
                        redirect: true
                    });
                })
                .catch(err => {
                    return {
                        type: ActionTypes.AUTH_FAILED,
                        payload: handleError(err)
                    };
                });
        }),
    );

    @Effect({ dispatch: false })
    signupSuccess = this.actions$.pipe(
        ofType<SignupSuccess>(ActionTypes.SIGNUP_SUCCESS),
        map(res => {
            this.router.navigate(['tabs', 'profile']);
        })
    );

    @Effect()
    login = this.actions$.pipe(
        ofType<Login>(ActionTypes.LOGIN),
        switchMap(async (action: Login) => {
            return this.afAuth.auth.signInWithEmailAndPassword(
                action.payload.email,
                action.payload.password
            )
                .then(res => {
                    storeLocalData(
                        res.user.email,
                        res.user.uid,
                        res.user.refreshToken
                    );
                    return new LoginSuccess({
                        email: res.user.email,
                        userId: res.user.uid,
                        token: res.user.refreshToken,
                        redirect: true
                    });
                })
                .catch(err => {
                    return {
                        type: ActionTypes.AUTH_FAILED,
                        payload: handleError(err)
                    };
                });
        }),
    );

    @Effect({ dispatch: false })
    loginSuccess = this.actions$.pipe(
        ofType<LoginSuccess>(ActionTypes.LOGIN_SUCCESS),
        map(res => {
            this.router.navigate(['tabs', 'dashboard']);
        })
    );

    @Effect()
    autoLogin = this.actions$.pipe(
        ofType<AutoLogin>(ActionTypes.AUTO_LOGIN),
        map(() => {
            const userData: {
                email: string;
                id: string;
                _token: string;
            } = JSON.parse(localStorage.getItem('userData'));

            let err = { code: 'no-user-data' };
            if (!userData) {
                return {
                    type: ActionTypes.AUTH_FAILED,
                    payload: handleError(err)
                };
            }

            const loadedUser = new User(
                userData.email,
                userData.id,
                userData._token
            );

            if (loadedUser.token) {
                return new LoginSuccess({
                    email: loadedUser.email,
                    userId: loadedUser.id,
                    token: loadedUser.token,
                    redirect: false
                });
            }
            err = { code: 'auto-login-failed' };
            return {
                type: ActionTypes.AUTH_FAILED,
                payload: handleError(err)
            };
        })
    );

    @Effect({ dispatch: false })
    logout = this.actions$.pipe(
        ofType<Logout>(ActionTypes.LOGOUT),
        map(() => {
            this.afAuth.auth.signOut()
                .then(() => {
                    this.db.firestore.terminate();
                    localStorage.removeItem('userData');
                    this.router.navigate(['auth']);
                });
        })
    );

    @Effect({ dispatch: false })
    authFailed = this.actions$.pipe(
        ofType<AuthFailed>(ActionTypes.AUTH_FAILED),
        map(err => {
            handleError(err);
            this.router.navigate(['auth']);
        })
    );

}
