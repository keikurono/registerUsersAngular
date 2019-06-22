import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FormService } from 'src/app/formulario/services/form.service';

import { FormularioComponent } from './formulario/formulario.component';
import { BarraprogresoComponent } from './barraprogreso/barraprogreso.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    BarraprogresoComponent
  ],
  imports: [
    BrowserModule,
  //  AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebasekey),
    AngularFirestoreModule,
  //  NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
