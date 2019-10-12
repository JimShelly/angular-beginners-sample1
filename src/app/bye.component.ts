import { Component, Input } from '@angular/core';

@Component({
  selector: 'bye',
  template: `<h1>Bye {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ByeComponent  {
  @Input() name: string;
}
