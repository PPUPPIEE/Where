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
      }).subscribe(res=>
        {
          this.cardInfo = res
        })


        if( window.localStorage )
        {
          if( !localStorage.getItem('firstLoad') )
          {
            localStorage['firstLoad'] = true;
            window.location.reload();
          }  
          else
            localStorage.removeItem('firstLoad');
        }  
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
    localStorage.setItem("detailName",name);
    localStorage.setItem("detailSector",sector);
    localStorage.setItem("detailProvine",province);
    localStorage.setItem("detailDistrict",district);
    localStorage.setItem("detailType",type);
    localStorage.setItem("detailImageurl",imageurl);
    localStorage.setItem("detailOpentime",opentime);
    localStorage.setItem("detailClosetime",closetime);
    localStorage.setItem("detailToilet",JSON.stringify(toilet));
    localStorage.setItem("detailParking",JSON.stringify(parking));
    localStorage.setItem("detailDetail",detail);
    localStorage.setItem("detailContact",contact);
    localStorage.setItem("detailSecurity",security);
    localStorage.setItem("detailLocation",location);
    
  }

}
