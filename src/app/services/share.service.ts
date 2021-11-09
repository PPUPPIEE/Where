import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  searchName = localStorage.getItem("searchName");
  searchSector = localStorage.getItem("searchSector");
  searchProvince =localStorage.getItem("searchProvince");
  searchType = localStorage.getItem("searchType");
  
  // api
  apiSearch = "https://dry-dawn-24095.herokuapp.com/api/search";
  apiGetProvince = "https://dry-dawn-24095.herokuapp.com/api/province";
  constructor() { }
}
