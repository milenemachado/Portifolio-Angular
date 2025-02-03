import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './menus/barra/barra.component';
import { LateralComponent } from './menus/lateral/lateral.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './menus/spinner/spinner.component';
import { SobreComponent } from './menus/sobre/sobre.component';
import { ContatoComponent } from './menus/contato/contato.component';
import { RodapeComponent } from './menus/rodape/rodape.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    LateralComponent,
    SpinnerComponent,
    SobreComponent,
    ContatoComponent,
    RodapeComponent,
    
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

