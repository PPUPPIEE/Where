import { Component, OnInit } from '@angular/core';
import data from './Test.json'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

 cardInfo: {img:string, name:string, Type:string,Time:string, Info:string}[] = data;
 cardName:string ="";
 cardImage:string ="";
 cardTime:string ="";

  constructor() { }

  ngOnInit(): void {

  }

  pushDetail(name:string, img:string, time:string){
    this.cardName = name;
    this.cardImage = img;
    this.cardTime = time;
    console.log(this.cardName);
    console.log(this.cardImage);
    console.log(this.cardTime);
  }

}
