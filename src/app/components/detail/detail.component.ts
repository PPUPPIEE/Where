import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { setTextRange } from 'typescript';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  Parking: string = "";
  Toilet: string = "";

  test:{toilet:boolean, parking:boolean}[] =[];


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
    
    this.setFacility();
    this.setText();

  }

  setFacility(){
    this.test.push(this.share.detailFacility);
    this.test.forEach(item => {
      if(item.toilet == true){this.Toilet = "ห้องน้ำ"}
      if(item.parking == true){this.Parking = "ที่จอดรถ"}
      if(item.parking == false && item.toilet == false){this.Parking = "-"}
    })
  }

  setText(){
    if (this.share.detailName == "") { this.share.detailName = "-" }
    if (this.share.detailProvine == "") { this.share.detailProvine = "-" }
    if (this.share.detailSector == "") { this.share.detailSector = "-" }
    if (this.share.detailDistrict == "") { this.share.detailDistrict = "-" }
    if (this.share.detailType == "") { this.share.detailType = "-" }
    if (this.share.detailOpentime == "") { this.share.detailOpentime = "-" }
    if (this.share.detailClosetime == "") { this.share.detailClosetime = "-" }
    if (this.share.detailDetail == "") { this.share.detailDetail = "-" }
    if (this.share.detailContact == "") { this.share.detailContact = "-" }
    if (this.share.detailSecurity == "") { this.share.detailSecurity = "-" }
    if (this.share.detailLocation == "") { this.share.detailLocation = "-" }
  }


}
