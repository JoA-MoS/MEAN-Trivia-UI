import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [ModalConfirmComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
