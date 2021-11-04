import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatalistingComponent } from './datalisting/datalisting.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import{ AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
registerLocaleData(localeFi);

@NgModule({
  declarations: [
    AppComponent,
    DatalistingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fi-FI'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
