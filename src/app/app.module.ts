import { FlashService } from './components/flash/flash.service';
import { OrderByScorePipe } from './shared/order-by-score.pipe';
import { UserService } from './services/user/user.service';
import { QuizService } from './services/quiz/questions.service';
import { QuestionsService } from './services/questions/questions.service';
import { environment } from './../environments/environment';
import { RestApiServiceConfig } from './services/rest-api/rest-api-service-config';
import { ResultsService } from './services/results/results.service';
// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Third Part Imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application Imports
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionCreateComponent } from './components/question-create/question-create.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultsFilterPipe } from './shared/results-filter.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayComponent } from './components/play/play.component';
import { FlashComponent } from './components/flash/flash.component';
import { FilterByTypePipe } from './components/flash/filter-by-type.pipe';


@Injectable()
export class QuizAPIConfig extends RestApiServiceConfig {
  baseUrl = environment.apiUrl;
  idProperty = '_id';
}

@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    HomePageComponent,
    QuestionCreateComponent,
    ResultListComponent,
    QuizComponent,
    ResultsFilterPipe,
    OrderByScorePipe,
    NavigationComponent,
    PlayComponent,
    FlashComponent,
    FilterByTypePipe
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
  providers: [ResultsService,
    QuestionsService,
    QuizService,
    UserService,
    FlashService,
    { provide: RestApiServiceConfig, useClass: QuizAPIConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
