import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  quizForm: FormGroup;


  constructor(private fb: FormBuilder,
    private service: QuizService,
    private resultService: ResultsService,
    private userService: UserService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.service.getAll$().subscribe((data) => {
      this.quizQuestions = data;
    });

  }

  createForm() {
    this.quizForm = this.fb.group({
      answer0: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
    });
  }


  prepareSave(): Result {
    const formModel = this.quizForm.value;
    let score = 0;
    Object.keys(formModel).forEach((elem, i) => {
      const found = this.quizQuestions[i].answers.find((obj) => {
        return obj._id === formModel[elem];
      });
      console.log(found);
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
    this.resultService.create(result, () => this.router.navigate(['']));
  }


}
