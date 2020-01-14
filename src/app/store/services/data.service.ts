import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import {
  Expense,
  Income,
  Profile,
  Category,
  Types
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  id: string;

  constructor(
    private db: AngularFirestore,
  ) { }

  fetchAll(ref: string, id?: string): Observable<any> {
    return from(this.collectionRef(ref, id)
      .snapshotChanges()
      .pipe(
        // tap((docArray: any[]) => console.log(docArray)),
        map((docArray: any[]) => {
          return docArray.map((res: any) => {
            return this.returnData(ref, res);
          });
        })
      ));
  }

  fetchItem(ref: string, key: string, id?: string): Observable<any> {
    return this.collectionRef(ref, id).doc(key)
      .snapshotChanges()
      .pipe(
        map((res: any): any => {
          return this.returnData(ref, res);
        })
      );
  }

  addItem(ref: string, item: any, id?: string) {
    return from(this.collectionRef(ref, id).add(item));
  }

  addCustomItem(ref: string, item: any, id?: string) {
    return from(this.collectionRef(ref, id).doc(item.id).set({ ...item }));
  }

  updateItem(ref: string, item: any, id?: string) {
    return from(this.collectionRef(ref, id).doc(item.id).update({ ...item }));
  }

  deleteItem(ref: string, key: any, id?: string) {
    return from( this.collectionRef(ref, id).doc(key).delete());
  }

  collectionRef(ref: string, id?: string) {
    switch (ref) {
      case 'profiles':
        return this.db.collection<Profile>('users');
      case 'expenses':
        return this.db.collection<Expense>('users').doc(id).collection(ref);
      case 'income':
        return this.db.collection<Income>('users').doc(id).collection(ref);
      case 'categories':
        return this.db.collection<Category>(ref);
      case 'types':
        return this.db.collection<Types>('categories').doc(id).collection(ref);
    }
  }

  returnData(ref: string, res: any) {
    switch (ref) {
      case 'profiles':
        return {
          id: res.payload.id,
          ...res.payload.data()
        } as Profile;
      case 'expenses':
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data()
        } as Expense;
      case 'income':
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data()
        } as Income;
      case 'categories':
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data()
        } as Category;
      case 'types':
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data()
        } as Types;
    }
  }

}
