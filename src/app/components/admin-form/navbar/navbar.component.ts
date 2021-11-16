import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import {MenuItem} from 'primeng/api';

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
    this.router.navigate(['/']); 
  }
  
  ngOnInit() {
    this.items = [
        {label: 'ข้อมูลทั้งหมด', icon: 'pi pi-fw pi-home',routerLink:['/alltable'],command : ()=>{
          this.activeItem = this.items[0];
        }},
        {label: 'ตรวจสอบข้อมูล', icon: 'pi pi-fw pi-book',routerLink:['/unchecktable'],command : ()=>{
          this.activeItem = this.items[1];
        }},
        {label: 'กราฟ', icon: 'pi pi-fw pi-chart-bar',routerLink:['/chart'],command : ()=>{
          this.activeItem = this.items[2];
        }},
        {label: 'ออกจากระบบ', icon: 'pi pi-fw pi-lock',command : ()=>{
          this.activeItem = this.items[3];
        }}
    ];

    
}
}
