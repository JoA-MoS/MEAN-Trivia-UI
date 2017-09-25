import { Answer } from './../../models/answer';
import { Question } from './../../models/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-question-display',
  templateUrl: './quiz-question-display.component.html',
  styleUrls: ['./quiz-question-display.component.scss']
})
export class QuizQuestionDisplayComponent implements OnInit {
  @Input() question: Question;
  public answers: Answer[];
  constructor() { }

  ngOnInit() {
    console.log(this.question);
    this.answers = this.question.answers;
  }

}
