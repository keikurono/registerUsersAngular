import { Injectable } from '@angular/core';
import { userInterface } from 'src/app/formulario/models/model-view-model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  usersCollection: AngularFirestoreCollection<userInterface>;
  users: Observable<userInterface[]>;

  constructor( private db: AngularFirestore ) {
    this.usersCollection = db.collection<userInterface>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as userInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  private formCollectionName = 'usuarios';

  getUsers() {
    return this.users;
  }
  addUser( user: userInterface) {
    this.usersCollection.add(user)
  }
}
