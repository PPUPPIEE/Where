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

  cardInfo: getSearchResult[] = [];
  // CardName: string = "";
  // CardSector: string = "";
  // CardProvince: string = "";
  // CardDistrict: string= "";
  // CardType: string= "";
  // CardImageurl: string= "";
  // CardOpentime: string= "";
  // CardClosetime: string= "";
  // CardToilet: boolean= false;
  // CardParking: boolean= false;
  // CardDetail: string= "";
  // CardContact: string= "";
  // CardSecurity: string= "";
  // CardLocation: string= "";

  constructor(public share: ShareService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post<getSearchResult[]>(this.share.apiSearch,
      {
        "name": this.share.searchName,
        "sector": this.share.searchSector,
        "province": this.share.searchProvince,
        "type": this.share.searchType
      }).subscribe(res => {
        this.cardInfo = res

      })
  }

  pushDetail(
    name: string,
    sector: string,
    province: string,
    district: string,
    type: string,
    imageurl: string,
    opentime: string,
    closetime: string,
    toilet: boolean,
    parking: boolean,
    detail: string,
    contact: string,
    security: string,
    location: string,
  ) {
    this.share.detailName = name;
    this.share.detailSector = sector;
    this.share.detailProvine = province;
    this.share.detailDistrict = district;
    this.share.detailType = type;
    this.share.detailImageurl = imageurl;
    this.share.detailOpentime = opentime;
    this.share.detailClosetime = closetime;
    this.share.detailToilet = toilet;
    this.share.detailParking = parking;
    this.share.detailDetail = detail;
    this.share.detailContact = contact;
    this.share.detailSecurity = security;
    this.share.detailLocation = location;
  }

}
