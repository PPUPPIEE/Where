import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  searchName ="";
  searchSector ="";
  searchProvince ="";
  searchType ="";
  
  // api
  apiSearch = "https://dry-dawn-24095.herokuapp.com/api/search";
  apiGetProvince = "https://dry-dawn-24095.herokuapp.com/api/province";
  constructor() { }
  
  //detail
  detailName ="";
  detailProvine="";
  detailSector="";
  detailDistrict="";
  detailType="";
  detailImageurl="";
  detailOpentime="";
  detailClosetime="";
  detailToilet=false;
  detailParking=false;
  detailDetail="";
  detailContact="";
  detailSecurity="";
  detailLocation="";

}
