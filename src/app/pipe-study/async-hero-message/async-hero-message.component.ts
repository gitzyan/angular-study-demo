import { Component, OnInit } from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-async-hero-message',
  templateUrl: './async-hero-message.component.html',
  styleUrls: ['./async-hero-message.component.scss']
})
export class AsyncHeroMessageComponent {
  message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() { this.resend(); }

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

}
