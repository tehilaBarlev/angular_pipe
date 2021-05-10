import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'List Of Cars';
  cars = [
    {model: 'Tesla', price: 30000},
    {model: 'BMW', price: 47000},
    {model: 'Jaguar', price: 200000},
    {model: 'Ferrari', price: 400000},
    {model: 'Sussita', price: 4000}
  ];
  curentColors : string[] = ["000000","000000","000000","000000"];
  title = 'game';
  bool:number=0;
  pgiha:number=0;
  b: boolean = true;
  end: boolean = false;
  update( arr: string[])
  {
    this.curentColors = arr;
  }
  suess(arr: string[])
  {
    for(let i=0; i<4; i++)
    {
      if(arr[i]!=this.curentColors[i])
        this.b=false;
    }
    if(this.b)
    {
      console.log("wowww!!");
      this.end = true;
      this.bool++;
    }
    else{
      this.pgiha++;
    }
      
  }
}
