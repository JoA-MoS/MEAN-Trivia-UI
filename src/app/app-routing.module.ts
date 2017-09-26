import { NavigationComponent } from './components/navigation/navigation.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { QuestionCreateComponent } from './components/question-create/question-create.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [{
      path: '',
      component: ResultListComponent,
    },
    {
      path: 'questions/new',
      component: QuestionCreateComponent
    }]
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
