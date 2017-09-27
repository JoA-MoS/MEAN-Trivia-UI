import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { FlashMessage } from './flash-message';

import { Injectable } from '@angular/core';


@Injectable()
export class FlashService {
  private flashMessageAddedSource = new Subject<FlashMessage[]>();

  flashMessageAdded$ = this.flashMessageAddedSource.asObservable();

  private dataStore: {
    data: FlashMessage[]
  };

  constructor() {
    this.dataStore = { data: [] };
  }

  getMessages(preserve: boolean = false): FlashMessage[] {
    if (preserve) {
      return this.dataStore.data.slice();
    } else {
      return this.dataStore.data.splice(0);
    }
  }

  addMessage(msg: FlashMessage, notify: boolean = false) {
    this.dataStore.data.push(msg);
    if (notify) {
      this.flashMessageAddedSource.next(this.dataStore.data);
    }
  }
}
