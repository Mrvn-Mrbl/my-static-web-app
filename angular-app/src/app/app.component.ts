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
    <audio #ref src="src/assets/Free_Test_Data_1MB_MP3.mp3"></audio>
    <p> Hallo, hier steht nur Inhalt, in einer Application! </p>
    <button (click)="ref.play()">▶️ play</button>
    <button (click)="ref.pause()">⏸ pause</button>
    </div>
  `,

})
export class AppComponent {
  customers: Customer[] = [{ id: 1, name: 'john' }];
}
