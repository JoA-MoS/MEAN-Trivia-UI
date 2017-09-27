import { ResultsSearchService } from './../../services/results-search/results-search.service';
import { ResultsService } from './../../services/results/results.service';
import { Observable } from 'rxjs/Observable';
import { Result } from './../../models/result';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  results$: Observable<Result[]>;
  searchTerm: string;

  constructor(private service: ResultsService,
    private router: Router) { }

  ngOnInit() {
    this.results$ = this.service.data$;
    this.service.loadAll();
  }



}
