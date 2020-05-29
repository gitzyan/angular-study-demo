import {Component, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public color: string;
  public condition = false;
  public thenBlock: TemplateRef<string>;
  public elseBlock: TemplateRef<string>;

  constructor() {
    const res = new Greeter('world');
    console.log(res);
  }
}


function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class Greeter {
  property = 'property';
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}
