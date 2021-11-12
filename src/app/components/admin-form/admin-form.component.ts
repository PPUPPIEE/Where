import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  constructor(
    public router: Router,
    public share: ShareService) { }

  username: string = "";
  password: string = "";


  ngOnInit(): void {
    if (this.share.checkTable === 'pass') {
      this.router.navigate(['/unchecktable']);
    }
   }

  onchangeUser(value: string) {
    this.username = value;
    console.log(this.username);
  }

  onchangePass(value: string) {
    this.password = value;
    console.log(this.password);
  }

  onEnterPress(event: any) {
    if (event.key === "Enter") {
      this.onSubmit();
    }

  }

  onSubmit() {

    if (this.username === "admin" && this.password === "p@ssw0rd") {
      console.log("Login Success");
     localStorage.setItem("checkTable", "pass")
      this.router.navigate(['/unchecktable']); 
    }
    else {
      alert("Username หรือ Password ไม่ถูกต้อง")
      this.username = "";
      this.password = "";
    }
  }

}
