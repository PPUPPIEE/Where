import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  //no image
  noImage = "assets/img/no-image-available_1.png"

  checkTable = localStorage.getItem("checkTable");

  searchName = localStorage.getItem("searchName");
  searchSector = localStorage.getItem("searchSector");
  searchProvince =localStorage.getItem("searchProvince");
  searchType = localStorage.getItem("searchType");
  
  // api
  apiSearch = "https://dry-dawn-24095.herokuapp.com/api/search";
  apiGetProvince = "https://dry-dawn-24095.herokuapp.com/api/province";
  apiAddImage = "https://dry-dawn-24095.herokuapp.com/api/firebase/upload";
  apiAddLocation = "https://dry-dawn-24095.herokuapp.com/api/addlocation";

  
  //detail
  detailName = localStorage.getItem("detailName");
  detailProvine= localStorage.getItem("detailProvine");
  detailSector= localStorage.getItem("detailSector");
  detailDistrict= localStorage.getItem("detailDistrict");
  detailType= localStorage.getItem("detailType");
  detailImageurl= JSON.parse(localStorage.getItem("detailImageurl") || "[]");
  detailFacility= JSON.parse(localStorage.getItem("detailFacilit") || "[]");
  detailOpentime= localStorage.getItem("detailOpentime");
  detailClosetime= localStorage.getItem("detailClosetime");
  detailDetail= localStorage.getItem("detailDetail");
  detailContact= localStorage.getItem("detailContact");
  detailSecurity= localStorage.getItem("detailSecurity");
  detailLocation= localStorage.getItem("detailLocation");

}
