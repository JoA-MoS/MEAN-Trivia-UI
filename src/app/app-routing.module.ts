import { ResultListComponent } from './components/result-list/result-list.component';
import { QuestionCreateComponent } from './components/question-create/question-create.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'questions/new',
    component: QuestionCreateComponent
  },
  {
    path: 'results',
    component: ResultListComponent
  },
  // {
  //   path: 'products/new',
  //   component: ProductCreateComponent
  // },
  // {
  //   path: 'products/detail',
  //   component: ProductDisplayComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
