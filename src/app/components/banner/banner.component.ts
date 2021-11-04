import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

import { getProvince } from './province';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  provinceList: getProvince[] = [];
  newProvinceList: string[] = [];
  province: string = 'จังหวัด';
  sector: string[] = ["เหนือ", "ตะวันออกเฉียงเหนือ", "กลาง", "ใต้", "ตะวันออก", "ตะวันตก"];
  sectorName: string = 'ภาค';
  typeList: string[] = ["ร้านอาหาร", "วัฒนธรรม", "สถานบันเทิงอารมณ์"];
  type = "ประเภท";

  constructor(
    private http: HttpClient,
    public share: ShareService) { }

  ngOnInit(): void {
    this.getProvince();
  }

  getProvince() {
    this.http.get<getProvince[]>('https://dry-dawn-24095.herokuapp.com/api/province').subscribe(
      response => { this.provinceList = response }
    )
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
    this.newProvinceList = [];
    this.provinceList.forEach(item => {
      if (item.sector === this.sectorName)
        this.newProvinceList.push(item.name)
    });
  }

  changeType(value: string){
    this.type = value;
  }

  addProvince() {
    if (this.sectorName == "ภาค") {
      this.provinceList.forEach(item => {
        this.newProvinceList.push(item.name)
      });
    }
  }

  postSearch(value:string) {
    //   this.http.post('https://dry-dawn-24095.herokuapp.com/api/search',{
    //     "name":value,
    //     "sector" : "",
    //     "province" : "",
    //     "type" : ""
    // }).subscribe(Response => console.log(Response))
    if(this.type === "ประเภท"){this.type =""};
    if(this.sectorName === "ภาค"){this.sectorName =""};
    if(this.province === "จังหวัด"){this.province =""};

    this.share.searchName = value;
    this.share.searchSector = this.sectorName;
    this.share.searchProvince = this.province;
    this.share.searchType = this.type;

    console.log(this.type , this.sectorName, this.province);

  }

}


