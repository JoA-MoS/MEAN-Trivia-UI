import { UserService } from './../../services/user/user.service';
import { Result } from './../../models/result';
import { ResultsService } from './../../services/results/results.service';
import { Router } from '@angular/router';
import { QuizService } from './../../services/quiz/questions.service';
import { Observable } from 'rxjs/Observable';
import { Question } from './../../models/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  // quizQuestions$: Observable<Question[]>;
  public quizQuestions: Question[];
  public answers: string[] = [null, null, null];
  constructor(private service: QuizService,
    private resultService: ResultsService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.service.getAll$().subscribe((data) => {
      this.quizQuestions = data;
    });
    // this.quizQuestions$ = this.service.data$;
    // this.service.loadAll();
  }

  prepareSave(): Result {
    console.log(this.quizQuestions);
    let score = 0;
    this.answers.forEach((elem, i) => {
      const found = this.quizQuestions[i].answers.find((obj) => {
        return obj._id === elem;
      });
      if (found.isCorrect) {
        score += 1;
      }

    });

    const saveResult: Result = {
      _id: null,
      userFirstName: this.userService.userFirstName,
      score: score,
    };
    // console.log(saveQuestion);
    return saveResult;
  }

  onSubmit() {
    const result = this.prepareSave();
    this.resultService.create(result, () => this.router.navigate(['/results']));
  }


}
