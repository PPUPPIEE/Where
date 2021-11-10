import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  //no image
  noImage = "assets/img/no-image-available_1.png"

  searchName = localStorage.getItem("searchName");
  searchSector = localStorage.getItem("searchSector");
  searchProvince =localStorage.getItem("searchProvince");
  searchType = localStorage.getItem("searchType");
  
  // api
  apiSearch = "https://dry-dawn-24095.herokuapp.com/api/search";
  apiGetProvince = "https://dry-dawn-24095.herokuapp.com/api/province";

  
  //detail
  detailName = localStorage.getItem("detailName");
  detailProvine= localStorage.getItem("detailProvine");
  detailSector= localStorage.getItem("detailSector");
  detailDistrict= localStorage.getItem("detailDistrict");
  detailType= localStorage.getItem("detailType");
  detailImageurl= localStorage.getItem("detailImageurl");
  detailOpentime= localStorage.getItem("detailOpentime");
  detailClosetime= localStorage.getItem("detailClosetime");
  detailToilet= localStorage.getItem("detailToilet");
  detailParking= localStorage.getItem("detailParking");
  detailDetail= localStorage.getItem("detailDetail");
  detailContact= localStorage.getItem("detailContact");
  detailSecurity= localStorage.getItem("detailSecurity");
  detailLocation= localStorage.getItem("detailLocation");

}
