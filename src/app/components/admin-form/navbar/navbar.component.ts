import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-adnavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class AdNavbarComponent implements OnInit {
  constructor(public router: Router, public share: ShareService) {}

  onlogout() {
    localStorage.setItem("checkTable", "")
    this.router.navigate(['/']); 
  }
  ngOnInit(): void {}
}
