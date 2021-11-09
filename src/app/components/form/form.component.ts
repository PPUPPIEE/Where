import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { FormControl, FormGroup, FormBuilder, Validators,} from '@angular/forms';

import { getProvince } from './locations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public Form!: FormGroup;
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
<<<<<<< Updated upstream
  selectedFile!: File;
=======
  selectedFile!: FileList;
  checkifSelect: boolean = false;
  checkifUpload: boolean = true;
>>>>>>> Stashed changes

  constructor(private http: HttpClient, public share: ShareService, private fb: FormBuilder) {}
    form = {
    name: "",
    location: "",
    type: this.type,
    sector: this.sectorName,
    province: this.sectorName,
    toilet: false,
    parking: false,
    opentime: "08:00",
    closetime: "22:00",
    detail: "",
    imageurl: this.image,
    contact: "",
    security: ""
  }
  
  ngOnInit(): void {
    this.getProvince();
    this.Form = this.fb.group(
      {
        formName: new FormControl('', [Validators.required]),
        formLocation : new FormControl('',[Validators.required]),
        formType: new FormControl('', [Validators.required]),
        formSector: new FormControl('', [Validators.required]),
        formProvince : new FormControl('',[Validators.required]),
        formOpenTime : new FormControl('',[Validators.required]),
        formCloseTime: new FormControl('', [Validators.required]),
        formDetail: new FormControl('', [Validators.required]),
        formContact: new FormControl('', [Validators.required]),
        formSecutiry: new FormControl('', [Validators.required])
      }
    );
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
<<<<<<< Updated upstream

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  checkCon() {
    if(this.image.length >=3){
=======
  checkCon() {
    //check image > 3
    if (this.image.length >= 3) {
>>>>>>> Stashed changes
      return true;
    }
    return false;
  }

<<<<<<< Updated upstream
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

    
=======
  onFileChanged(event: any) {
    this.selectedFile = event.target.files;
    console.log(this.selectedFile);
    this.checkifUpload = false;
    this.checkifSelect = true;
    this.onUpload();
  }
//clear form
  onClear() {
    this.type = 'ประเภท';
    this.sectorName = 'ภาค';
    this.province = 'จังหวัด';
    this.checkifSelect = false;
    this.checkifUpload = true;
    this.image.forEach((url) => {
      console.log(url.substring(70, 87));
      this.http
        .post(
          'https://dry-dawn-24095.herokuapp.com/api/firebase/delete',
          {
            name: url.substring(70, 87),
          },
          { responseType: 'text' }
        )
        .subscribe(() => {
          console.log('Delete Complete');
          this.image = [];
        });
    });
  }
  showlog() {
    console.log(this.image);
  }
  //upload image
   onUpload() {
    this.checkifUpload = true;
    const uploadData = new FormData();
     Array.from(this.selectedFile).forEach(async(file) => {
      console.log(file);
      uploadData.append('file', file);
      
      this.http
        .post(
          this.share.apiAddImage,
          uploadData,
          { responseType: 'text' }
        )
        .subscribe((data) => {
          this.image.push(data);
          console.log(this.image);
          this.checkifSelect = false;
        });
    });
  }

  onConfirm(name: string) {
    this.http.post(this.share.apiAddLocation,
      {
        name: name,
        location: "",
        type: this.type,
        sector: this.sectorName,
        province: this.sectorName,
        toilet: false,
        parking: false,
        opentime: "08:00",
        closetime: "22:00",
        detail: "",
        imageurl: this.image,
        contact: "",
        security: ""
      }
    ).subscribe((data) => {
      console.log(data);
    });
  }
>>>>>>> Stashed changes
}
