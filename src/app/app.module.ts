import { RestApiServiceConfig } from './services/abstract-rest-api/rest-api-service-config';
import { ProductsService } from './services/products/products.service';
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
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    ProductListComponent,
    ProductDisplayComponent,
    ProductCreateComponent,
    ProductEditComponent,
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
  providers: [ProductsService, RestApiServiceConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
