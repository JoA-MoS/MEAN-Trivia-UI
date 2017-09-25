import { Answer } from './../../models/answer';
import { Router } from '@angular/router';
import { QuestionsService } from './../../services/questions/questions.service';
import { Question } from './../../models/question';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {
  @Input() question: Question;
  questionForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: QuestionsService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): any {
    this.questionForm = this.fb.group({
      questionText: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      correctAnswer: ['', Validators.required],
      fakeAnswer1: ['', Validators.required],
      fakeAnswer2: ['', Validators.required],
    });
  }


  prepareSave(): Question {
    const formModel = this.questionForm.value;
    const saveQuestion: Question = {
      _id: null,
      questionText: formModel.questionText as string,
      answers: [{
        answerText: formModel.correctAnswer as string,
        isCorrect: true,
      },
      {
        answerText: formModel.fakeAnswer1 as string,
        isCorrect: false,
      },
      {
        answerText: formModel.fakeAnswer2 as string,
        isCorrect: false,
      }]
    };
    // console.log(saveQuestion);
    return saveQuestion;
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.question = this.prepareSave();
    this.service.create$(this.question).subscribe(data => this.router.navigate(['/']));
  }

}
