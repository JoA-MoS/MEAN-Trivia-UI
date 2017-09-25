import { Result } from './../../models/result';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.scss']
})
export class ResultDisplayComponent implements OnInit {
  @Input() result: Result;
  constructor() { }

  ngOnInit() {
  }

}
