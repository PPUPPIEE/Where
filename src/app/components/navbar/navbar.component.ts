import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public share:ShareService) { }

  ngOnInit(): void {
  }

  onClick(){
    window.location.reload();
    localStorage.setItem("searchName","");
    localStorage.setItem("searchSector","");
    localStorage.setItem("searchProvince","");
    localStorage.setItem("searchType","");
  }

}
