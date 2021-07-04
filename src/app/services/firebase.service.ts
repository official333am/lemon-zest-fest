import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export interface Message { 
  date: string;
  message: string;
  name: string; 
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private messageCollection: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;

  constructor(
    public afs: AngularFirestore
  ) { 
    this.messageCollection = afs.collection<Message>('messages', ref => ref.orderBy('date', 'desc'));
    this.messages = this.messageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
  }

  public addMessage(message: Message): void {
    this.messageCollection.add(message);
  }
  
}
