import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public share: ShareService) {

   }

  ngOnInit(): void {
    console.log(this.share.detailToilet);
    console.log(this.share.detailParking);
    console.log(this.share.detailName);
    console.log(this.share.detailSecurity)
  }

}
