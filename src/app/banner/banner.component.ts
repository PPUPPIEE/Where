import { Component, OnInit } from '@angular/core';
import  data  from 'src/assets/json/province.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  
  provinceList:{name:string,sector:string}[] = data;
  sector: string[] = ["เหนือ","ตะวันออกเฉียงเหนือ","กลาง","ใต้","ตะวันออก","ตะวันตก"];
  province:string = 'จังหวัด';
  sectorName:string = 'ภาค';
  ngGet:string = 'true';
  
  constructor() { }

  ngOnInit(): void {
  }

  changeProvince(value: string){
    this.province = value;
    
  }
  changeSector(value: string){
    this.sectorName = value;
    this.province = 'จังหวัด';
    
  }

  

}
