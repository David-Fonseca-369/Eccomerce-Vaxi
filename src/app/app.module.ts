import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire'; //tiene todas la librerias de conexxión entre un proyecto Angular y Firebase
import {AngularFirestoreModule} from '@angular/fire/firestore';  //base de datos
import {AngularFireAuthModule} from '@angular/fire/auth';  // seguridad
import {AngularFireStorageModule} from '@angular/fire/storage';  //para el storage

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config), //configuracion del environment
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
