import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export interface Message { 
  date: string;
  timestamp: Date;
  message: string;
  name: string; 
}

export interface WriteUp { 
  date: string;
  timestamp: Date;
  writeUp: string;
  pullQuote: string;
  writeUp2: string;
  author: string;
  title: string;
  imageURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private messageCollection: AngularFirestoreCollection<Message>;
  private writeUpCollection: AngularFirestoreCollection<WriteUp>;
  messages: Observable<Message[]>;
  writeUps: Observable<WriteUp[]>;

  constructor(
    public afs: AngularFirestore
  ) { 
    this.messageCollection = afs.collection<Message>('messages', ref => ref.orderBy('timestamp', 'desc'));
    this.messages = this.messageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.writeUpCollection = afs.collection<WriteUp>('writeUps', ref => ref.orderBy('timestamp', 'desc'));
    this.writeUps = this.writeUpCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as WriteUp;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public addMessage(message: Message): void {
    this.messageCollection.add(message);
  }

  public addWriteUp(writeUp: WriteUp): void {
    this.writeUpCollection.add(writeUp);
  }
  
}
