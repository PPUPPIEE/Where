import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

import {MenuItem} from 'primeng/api';


import Swal from 'sweetalert2'


@Component({
  selector: 'app-adnavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class AdNavbarComponent implements OnInit {

  items: MenuItem[]= []
  
  activeItem: MenuItem ={}

  constructor(public router: Router, public share: ShareService) {}


  onlogout() {
      localStorage.setItem("checkTable", "")
      this.router.navigate(['/']) 
  }



  
  ngOnInit() {
    this.items = [
        {label: 'All Data', icon: 'pi pi-fw pi-home',routerLink:['/alltable']},
        {label: 'Uncheck Data', icon: 'pi pi-fw pi-book',routerLink:['/unchecktable']},
        {label: 'Chart', icon: 'pi pi-fw pi-chart-bar',routerLink:['/chart']},
        {label: 'Logout', icon: 'pi pi-fw pi-lock',queryParams : {},command : ()=>{
          Swal.fire({
            title: 'Do you want to logout ?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancle`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('You have logout!','', 'success').then(()=>{
                this.onlogout();
              })
            }
          })
        }}
    ];

    
}
}
