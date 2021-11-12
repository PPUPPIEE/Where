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

  checkToilet: boolean = false;
  checkParking: boolean = false;


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

  filterToilet(filter: string) {
    if (filter == "ห้องน้ำ") { this.checkToilet = !this.checkToilet };
    if (filter == "ที่จอดรถ") { this.checkParking = !this.checkParking };

    console.log("toilet = " + this.checkToilet);
    console.log("parking =" + this.checkParking);

    this.cardInfo = [];
    this.temp.forEach(item => {

      if (this.checkToilet == true && this.checkParking == false) {
        if (item.toilet == true && item.parking == false) {
          this.cardInfo.push(item)
        }
        if (item.toilet == true && item.parking == true) {
          this.cardInfo.push(item)
        }
      }

      if (this.checkToilet == false && this.checkParking == true) {
        if (item.toilet == false && item.parking == true) {
          this.cardInfo.push(item)
        }
        if (item.toilet == true && item.parking == true) {
          this.cardInfo.push(item)
        }
      }

      if (this.checkToilet == false && this.checkParking == false) {
        this.cardInfo.push(item)
      }

      if (this.checkToilet == true && this.checkParking == true) {
        if (item.toilet == true && item.parking == true) {
          this.cardInfo.push(item)
        }
      }

    })
    console.log(this.cardInfo)
  }



}
