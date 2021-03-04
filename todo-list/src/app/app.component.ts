import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //used in directive, or HTML element
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name: string = 'Rayyan';

  //runs when instantiated... or when component is initialized
  constructor() {
    // console.log("Component active");
    // this.changeName("Selma Burke");
  }

  // changeName(newName:string):void{
  //   this.name = newName;
  // }
}
