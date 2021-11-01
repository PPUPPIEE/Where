import { Component, OnInit } from '@angular/core';
import  province  from 'src/assets/json/province.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public provinceList:{name:string}[] = province;
  sector: string[] = ["เหนือ","ตะวันออกเฉียงเหนือ","กลาง","ใต้","ตะวันออก","ตะวันตก"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
