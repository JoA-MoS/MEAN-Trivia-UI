import { RestApiServiceConfig } from './services/abstract-rest-api/rest-api-service-config';
// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Third Part Imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application Imports
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    HomePageComponent
  ],
  entryComponents: [ModalConfirmComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [RestApiServiceConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
