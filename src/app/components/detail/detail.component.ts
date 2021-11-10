import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  Parking: string = "";
  Toilet: string = "";


  constructor(public share: ShareService) {
  }

  ngOnInit(): void {

    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }
      else
        localStorage.removeItem('firstLoad');
    }

    console.log(this.share.detailImageurl)

    if (this.share.detailParking == "true") { this.Parking = "ที่จอดรถ" }
    if (this.share.detailToilet == "true") { this.Toilet = "ห้องน้ำ" }
    if (this.share.detailToilet == "false" && this.share.detailParking == "false") { this.Parking = "-" }


    if (this.share.detailName == "null") { this.share.detailName = "-" }
    if (this.share.detailProvine == "null") { this.share.detailProvine = "-" }
    if (this.share.detailSector == "null") { this.share.detailSector = "-" }
    if (this.share.detailDistrict == "null") { this.share.detailDistrict = "-" }
    if (this.share.detailType == "null") { this.share.detailType = "-" }
    if (this.share.detailOpentime == "null") { this.share.detailOpentime = "-" }
    if (this.share.detailClosetime == "null") { this.share.detailClosetime = "-" }
    if (this.share.detailDetail == "null") { this.share.detailDetail = "-" }
    if (this.share.detailContact == "null") { this.share.detailContact = "-" }
    if (this.share.detailSecurity == "null") { this.share.detailSecurity = "-" }
    if (this.share.detailLocation == "null") { this.share.detailLocation = "-" }

  }

}
