import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <ul>
        <li *ngFor="let shirt of shirts | async">
        {{shirt.name}} is  {{shirt.price}}
        </li>
        </ul>
        `
})
export class AppComponent {
  private shirtCollection: AngularFirestoreCollection<shirt>;
  shirts: Observable<ShirtId[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.shirtCollection = afs.collection<Shirt>('shirts');
    this.shirts = this.shirtCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as shirt;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }
}
