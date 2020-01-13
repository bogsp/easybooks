import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import {
  Expense,
  Income
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFirestore) { }

  fetchAll(ref: string, id: string): Observable<any> {
    return from(this.collectionRef(ref, id)
      .snapshotChanges()
      .pipe(
        map((docArray: any[]) => {
          return docArray.map((res: any) => {
            return { id: res.payload.id, ...this.returnData(ref, res) };
          });
        })
      ));
  }

  fetchAllWithQuery(ref: string, id: string, q: string, key: string): Observable<any> {
    return from(this.collectionQuery(ref, id, q, key)
      .snapshotChanges()
      .pipe(
        map((docArray: any[]) => {
          return docArray.map((res: any) => {
            return { id: res.payload.id, ...this.returnData(ref, res) };
          });
        })
      ));
  }

  fetchItem(ref: string, id: string, key: string): Observable<any> {
    return this.collectionRef(ref, id).doc(key)
      .snapshotChanges()
      .pipe(
        map((res: any): any => {
          return { id: res.payload.id, ...this.returnData(ref, res) };
        })
      );
  }

  addItem(ref: string, id: string, item: any) {
    return from(this.collectionRef(ref, id).add(item));
  }

  addCustomItem(ref: string, id: string, item: any) {
    return from(this.collectionRef(ref, id).doc(item.id).set({ ...item }));
  }

  updateItem(ref: string, id: string, item: any) {
    return from(this.collectionRef(ref, id).doc(item.id).update({ ...item }));
  }

  deleteItem(ref: string, id: string, key: any) {
    return from(this.collectionRef(ref, id).doc(key).delete());
  }

  collectionRef(ref: string, id: string) {
    switch (ref) {
      case 'expenses':
        return this.db.collection<Expense>(`'users/'${id}/${ref}`);
      case 'income':
        return this.db.collection<Income>(`'users/'${id}/${ref}`);
    }
  }

  collectionQuery(ref: string, id: string, q: string, key: string) {
    switch (ref) {
      case 'expenses':
        return this.db.collection<Expense>(`'users/'${id}/${ref}`, res => res.where(q, '==', key));
      case 'income':
        return this.db.collection<Income>(`'users/'${id}/${ref}`, res => res.where(q, '==', key));
    }
  }

  returnData(ref: string, res: any) {
    switch (ref) {
      case 'expenses':
        return res.payload.data() as Expense;
      case 'income':
        return res.payload.data() as Income;
    }
  }
}
