import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  Parking : string ="";
  Toilet : string = "";


  constructor(public share: ShareService) {
   }

  ngOnInit(): void {
if(this.share.detailParking == true){ this.Parking ="ที่จอดรถ"}
if(this.share.detailToilet == true){ this.Toilet ="ห้องน้ำ"}

  }

}
