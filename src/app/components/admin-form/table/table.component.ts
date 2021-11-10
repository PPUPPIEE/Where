import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {dataTable} from './data';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data : dataTable[] =[];
  check : boolean = true
  correct : string = "correct";
  delete : string = "delete";
  status : string = "";
  constructor(
    public share: ShareService,
    public router: Router,
    private http: HttpClient
    ) { }



 


  ngOnInit(): void {
    // this.http.get<dataTable[]>(this.share.apiSearch).subscribe(res => this.data = res)
    this.http.post<dataTable[]>(this.share.apiSearch,
      {
        "name": "",
        "sector": "",
        "province": "",
        "type": ""
      }).subscribe( res =>
        {
          this.data = res         
        })

    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }
      else
        localStorage.removeItem('firstLoad');
    }


    if (this.share.checkTable === "pass") {

    } else {
      this.router.navigate(['/admin']);
    }
  }




}
