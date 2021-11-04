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
  constructor() { }
}
