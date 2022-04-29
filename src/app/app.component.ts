import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number1!:number;
  number2!:number;
  dice1:string = `../assets/img/dice2.png`;
  dice2:string = `../assets/img/dice5.png`;

  roll():void{
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1;
    this.dice1 = '../assets/img/dice' + this.number1 + '.png';
    this.dice2 = '../assets/img/dice' + this.number2 + '.png';
  }
}
