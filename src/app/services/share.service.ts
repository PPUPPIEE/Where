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
  apiGetUnchecked = "https://dry-dawn-24095.herokuapp.com/api/showuncheck";
  apiChangeStatus = "https://dry-dawn-24095.herokuapp.com/api/updatestatus";
  apiDeleteLocation = "https://dry-dawn-24095.herokuapp.com/api/deletelocation";
  apiGetall = "https://dry-dawn-24095.herokuapp.com/api/getall";
  apiDeleteIMG = "https://dry-dawn-24095.herokuapp.com/api/firebase/delete";
  
  //api local
  // apiSearch = "http://localhost:5000/api/search";
  // apiGetProvince = "http://localhost:5000/api/province";
  // apiAddImage = "http://localhost:5000/api/firebase/upload";
  // apiAddLocation = "http://localhost:5000/api/addlocation";
  // apiGetUnchecked = "http://localhost:5000/api/showuncheck";
  // apiChangeStatus = "http://localhost:5000/api/updatestatus";
  // apiDeleteLocation = "http://localhost:5000/api/deletelocation";
  // apiGetall = "http://localhost:5000/api/getall";
  // apiDeleteIMG = "http://localhost:5000/api/firebase/delete";

  //detail
  detailName = localStorage.getItem("detailName");
  detailProvine= localStorage.getItem("detailProvine");
  detailSector= localStorage.getItem("detailSector");
  detailDistrict= localStorage.getItem("detailDistrict");
  detailType= localStorage.getItem("detailType");
  detailImageurl= JSON.parse(localStorage.getItem("detailImageurl") || "[]");
  detailToilet= localStorage.getItem("detailToilet");
  detailParking= localStorage.getItem("detailParking");
  detailOpentime= localStorage.getItem("detailOpentime");
  detailClosetime= localStorage.getItem("detailClosetime");
  detailDetail= localStorage.getItem("detailDetail");
  detailContact= localStorage.getItem("detailContact");
  detailSecurity= localStorage.getItem("detailSecurity");
  detailLocation= localStorage.getItem("detailLocation");

}
