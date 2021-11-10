import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { getSearchResult } from './search.result';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  filterCheckbox: string[] = ["ห้องน้ำ", "ที่จอดรถ"];
  cardInfo: getSearchResult[] = [];
  temp: getSearchResult[] = [];

  checkToilet: boolean = true;
  checkParking: boolean = true;


  constructor(
    public share: ShareService,
    private http: HttpClient) { }

  ngOnInit(): void {

    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }
      else
        localStorage.removeItem('firstLoad');
    }

    this.getSearchResult();


  }

  getSearchResult() {
    this.http.post<getSearchResult[]>(this.share.apiSearch,
      {
        "name": this.share.searchName,
        "sector": this.share.searchSector,
        "province": this.share.searchProvince,
        "type": this.share.searchType
      }).subscribe(res => {
        this.cardInfo = res
        this.temp = this.cardInfo
        console.log(this.cardInfo)

      })
  }


  pushDetail(
    name: string,
    sector: string,
    province: string,
    district: string,
    type: string,
    imageurl: string[],
    opentime: string,
    closetime: string,
    toilet: boolean,
    parking: boolean,
    detail: string,
    contact: string,
    security: string,
    location: string,
  ) {
    localStorage.setItem("detailName", name);
    localStorage.setItem("detailSector", sector);
    localStorage.setItem("detailProvine", province);
    localStorage.setItem("detailDistrict", district);
    localStorage.setItem("detailType", type);
    localStorage.setItem("detailOpentime", opentime);
    localStorage.setItem("detailClosetime", closetime);
    localStorage.setItem("detailDetail", detail);
    localStorage.setItem("detailContact", contact);
    localStorage.setItem("detailSecurity", security);
    localStorage.setItem("detailLocation", location);

    localStorage.setItem("detailImageurl", JSON.stringify(imageurl));
    localStorage.setItem("detailToilet", JSON.stringify(toilet));
    localStorage.setItem("detailParking", JSON.stringify(parking));
  }

  filterToilet(filter: boolean) {
    this.checkToilet = !filter
    console.log("toilet" + this.checkToilet);
    this.cardInfo = [];
    this.temp.forEach(item => {
      if (item.toilet == this.checkToilet && item.parking == this.checkParking) {
        this.cardInfo.push(item);
      }
    })
    console.log(this.cardInfo)
  }

  filterParking(filter: boolean) {
    this.checkParking = !filter
    console.log("toilet" + this.checkParking)
    this.cardInfo = [];
    this.temp.forEach(item => {
      if (item.parking == this.checkParking && item.toilet == this.checkToilet) {
        this.cardInfo.push(item);
        
      }
    })
    console.log(this.cardInfo)
  }

}
