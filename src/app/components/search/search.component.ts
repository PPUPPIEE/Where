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
  cardName: string = "";
  cardImage: string = "";
  cardTime: string = "";

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





  
  pushDetail(name: string, img: string, time: string) {
    this.cardName = name;
    this.cardImage = img;
    this.cardTime = time;
    console.log(this.cardName);
    console.log(this.cardImage);
    console.log(this.cardTime);
    


  }

}
