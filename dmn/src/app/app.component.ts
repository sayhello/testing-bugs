import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import "rxjs/add/operator/map";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  items: FirebaseListObservable<any>;
  
  constructor(af: AngularFire) {
    this.items = af.database.list('/', {
      query: {
        limitToLast: 3,
        orderByKey: true
      }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
  }

  addItem(newName: string) {
    this.items.push(
      { 
        last_name: newName,
        date_time_add: new Date().toUTCString()
      }
    );
  }

  updateItem(key: string, newText: string) {
    this.items.update(key, { last_name: newText });
  }

}
