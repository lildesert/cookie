import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyB0wbAt5f0Mleil0nyGVkSQM3t57nzicK0",
  authDomain: "cookie-b5fe6.firebaseapp.com",
  databaseURL: "https://cookie-b5fe6.firebaseio.com",
  storageBucket: "cookie-b5fe6.appspot.com",
  messagingSenderId: "923182330691"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }