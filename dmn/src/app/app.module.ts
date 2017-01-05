import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBqNs2sYjhXtr7cwiei3ZB0mhck7v6RW3U",
  authDomain: "datemenow-764c3.firebaseapp.com",
  databaseURL: "https://datemenow-764c3.firebaseio.com",
  storageBucket: "datemenow-764c3.appspot.com",
  messagingSenderId: "1048068159574"

};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
