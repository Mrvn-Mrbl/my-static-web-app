import { Component } from '@angular/core';
export class Customer {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
 
    <p> Hallo, hier steht nur Inhalt, in einer Application! </p>

    </div>
  `,

})
export class AppComponent {
  customers: Customer[] = [{ id: 1, name: 'john' }];
}
