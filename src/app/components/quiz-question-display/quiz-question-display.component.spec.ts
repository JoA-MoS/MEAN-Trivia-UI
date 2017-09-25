import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionDisplayComponent } from './quiz-question-display.component';

describe('QuizQuestionDisplayComponent', () => {
  let component: QuizQuestionDisplayComponent;
  let fixture: ComponentFixture<QuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
