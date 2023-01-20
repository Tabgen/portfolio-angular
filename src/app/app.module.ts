import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth,signInWithEmailAndPassword } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore, getDocs, getFirestore } from '@angular/fire/firestore';
import { FirebaseTSApp } from "firebasets/firebasetsApp/firebaseTSApp";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    const firebaseConfig = {

      apiKey: "AIzaSyBWX367YSYB9ObI0EQ7dCvzPSB49kvhye0",
    
      authDomain: "tangen-portfolio.firebaseapp.com",
    
      databaseURL: "https://tangen-portfolio-default-rtdb.europe-west1.firebasedatabase.app",
    
      projectId: "tangen-portfolio",
    
      storageBucket: "tangen-portfolio.appspot.com",
    
      messagingSenderId: "508866405014",
    
      appId: "1:508866405014:web:be8ab10d027d45413dd8b7"
    
    };
    
    FirebaseTSApp.init(firebaseConfig);
  }
}
