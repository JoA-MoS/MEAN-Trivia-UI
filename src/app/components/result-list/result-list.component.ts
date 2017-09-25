import { ResultsService } from './../../services/results/results.service';
import { Observable } from 'rxjs/Observable';
import { Result } from './../../models/result';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  results$: Observable<Result[]>;
  constructor(private service: ResultsService,
    private router: Router) { }

  ngOnInit() {
    this.results$ = this.service.data$;
    this.service.loadAll();
  }

}
