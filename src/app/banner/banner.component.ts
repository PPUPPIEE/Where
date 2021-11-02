import { Component, OnInit } from '@angular/core';
import data from 'src/assets/json/province.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  provinceList: { name: string, sector: string }[] = data;
  newProvinceList: string[] = [];
  sector: string[] = ["เหนือ", "ตะวันออกเฉียงเหนือ", "กลาง", "ใต้", "ตะวันออก", "ตะวันตก"];
  province: string = 'จังหวัด';
  sectorName: string = 'ภาค';
  ngGet: string = 'true';

  constructor() { }

  ngOnInit(): void {
  }

  changeProvince(value: string) {
    this.province = value;
    // this.provinceList.forEach(item => {
    //   if (item.name == this.province) {
    //     this.sectorName = item.sector;
    //   }
    // });


  }
  changeSector(value: string) {
    this.sectorName = value;
    this.province = 'จังหวัด';
    this.newProvinceList =[];
    this.provinceList.forEach(item => {
      if (item.sector === this.sectorName)
        this.newProvinceList.push(item.name)
    });
  }

  addProvince(){
    if (this.sectorName == "ภาค") {
      this.provinceList.forEach(item => {
        this.newProvinceList.push(item.name)
      });
    }
  }

}


