import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getProvince } from './province';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  provinceList: getProvince[] =[];
  newProvinceList: string[] = [];
  sector: string[] = ["เหนือ", "ตะวันออกเฉียงเหนือ", "กลาง", "ใต้", "ตะวันออก", "ตะวันตก"];
  province: string = 'จังหวัด';
  sectorName: string = 'ภาค';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<getProvince[]>('https://dry-dawn-24095.herokuapp.com/api/province').subscribe(
      response =>{ this.provinceList = response}
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

  postSearch(){
    this.http.post('https://dry-dawn-24095.herokuapp.com/api/search',{
      "name":"",
      "sector" : "",
      "province" : "",
      "type" : ""
  }).subscribe(Response => console.log(Response))
  }

}


