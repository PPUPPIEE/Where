import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

import { getProvince } from './locations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  provinceList: getProvince[] = [];
  newProvinceList: string[] = [];
  province: string = 'จังหวัด';
  sector: string[] = [
    'เหนือ',
    'ตะวันออกเฉียงเหนือ',
    'กลาง',
    'ใต้',
    'ตะวันออก',
    'ตะวันตก',
  ];
  sectorName: string = 'ภาค';
  typeList: string[] = ['ร้านอาหาร', 'วัฒนธรรม', 'สถานบันเทิงอารมณ์'];
  type = 'ประเภท';
  image: string[] = [];
  selectedFile!: File;

  constructor(private http: HttpClient, public share: ShareService) {}

  ngOnInit(): void {
    this.getProvince();
  }

  getProvince() {
    this.http
      .get<getProvince[]>(this.share.apiGetProvince)
      .subscribe((response) => {
        this.provinceList = response;
      });
  }

  changeProvince(value: string) {
    this.province = value;
    console.log(this.province);
  }

  changeSector(value: string) {
    this.sectorName = value;
    this.province = 'จังหวัด';
    this.newProvinceList = [];
    this.provinceList.forEach((item) => {
      if (item.sector === this.sectorName) {
        this.newProvinceList.push(item.name);
      }
    });
  }

  changeType(value: string) {
    this.type = value;
  }

  addProvince() {
    if (this.sectorName == 'ภาค') {
      this.provinceList.forEach((item) => {
        this.newProvinceList.push(item.name);
      });
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  checkCon() {
    if(this.image.length >=3){
      return true;
    }
    return false;
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.http
      .post(
        'https://dry-dawn-24095.herokuapp.com/api/firebase/upload',
        uploadData,
        { responseType: 'text' }
      )
      .subscribe((event) => {
        this.image.push(event);
        console.log(this.image);
      });
  }

    
}
