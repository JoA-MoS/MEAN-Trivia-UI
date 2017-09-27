import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { FlashMessage } from './flash-message';
import { FlashService } from './flash.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FlashMessageTypes } from './flash-message-types.enum';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messages: FlashMessage[];

  constructor(private flashService: FlashService) {
    this.subscription = this.flashService.flashMessageAdded$.subscribe(msgs => {
      this.messages = this.flashService.getMessages();
    });

  }

  ngOnInit() {
    this.messages = this.flashService.getMessages();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
