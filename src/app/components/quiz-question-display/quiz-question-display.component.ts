import { Question } from './../../models/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-question-display',
  templateUrl: './quiz-question-display.component.html',
  styleUrls: ['./quiz-question-display.component.scss']
})
export class QuizQuestionDisplayComponent implements OnInit {
  @Input() question: Question;
  constructor() { }

  ngOnInit() {
  }

}
