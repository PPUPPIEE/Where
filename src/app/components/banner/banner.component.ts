import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { Router } from '@angular/router';
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
    public share: ShareService,
    public router: Router) { }

  ngOnInit(): void {
    this.getProvince();
  }

  getProvince() {
    this.http.get<getProvince[]>(this.share.apiGetProvince).subscribe(
      response => { this.provinceList = response }
    )
  }

  changeProvince(value: string) {
    this.province = value;
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

  changeType(value: string) {
    this.type = value;
  }

  addProvince() {
    if (this.sectorName == "ภาค") {
      this.provinceList.forEach(item => {
        this.newProvinceList.push(item.name)
      });
    }
  }

  async onEnterPress(event: any,value: string) {
    if (event.key === "Enter") {
    await   this.postSearch(value);
    await  this.router.navigate(['/search']); 
    }

  }

  postSearch(value: string) {

    if (this.type === "ประเภท") { this.type = "" };
    if (this.sectorName === "ภาค") { this.sectorName = "" };
    if (this.province === "จังหวัด") { this.province = "" };

    localStorage.setItem("searchName",value);
    localStorage.setItem("searchSector",this.sectorName);
    localStorage.setItem("searchProvince",this.province);
    localStorage.setItem("searchType",this.type);
    
  }

}


