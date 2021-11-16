import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { dataTable } from '../alltable/data';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  data: any;

  products: dataTable[] = [];

  numberTest: number = 99;

  nature:number[] =[0,0,0,0,0,0];
  culture:number[] =[0,0,0,0,0,0];
  market:number[] = [0,0,0,0,0,0];
  building:number[] =[0,0,0,0,0,0];
    
  constructor(
    private http: HttpClient,
    public share: ShareService) 
    { }
    

  ngOnInit(): void {
    this.http
      .get<dataTable[]>(this.share.apiGetall)
      .subscribe((res) => {
        this.products = res;
        console.log("data");
        console.log(this.products);
        console.log("length");
        console.log(this.products.length)
        this.setShowNumber();
        this.setChart();
      });
   

  }

  setShowNumber(){
    this.products.forEach(item =>{
      if(item.type ==="ธรรมชาติ" ){
        if(item.sector === "เหนือ"){
          this.nature[0]+=1
        }
        if(item.sector === "กลาง"){
          this.nature[1]+=1
        }
        if(item.sector === "ใต้"){
          this.nature[2]+=1
        }
        if(item.sector === "ตะวันออกเฉียงเหนือ"){
          this.nature[3]+=1
        }
        if(item.sector === "ตะวันออก"){
          this.nature[4]+=1
        }
        if(item.sector === "ตะวันตก"){
          this.nature[5]+=1
        }
      }

      if(item.type ==="วัฒนธรรม" ){
        if(item.sector === "เหนือ"){
          this.culture[0]+=1
        }
        if(item.sector === "กลาง"){
          this.culture[1]+=1
        }
        if(item.sector === "ใต้"){
          this.culture[2]+=1
        }
        if(item.sector === "ตะวันออกเฉียงเหนือ"){
          this.culture[3]+=1
        }
        if(item.sector === "ตะวันออก"){
          this.culture[4]+=1
        }
        if(item.sector === "ตะวันตก"){
          this.culture[5]+=1
        }
      }
      
      if(item.type ==="ตลาด" ){
        if(item.sector === "เหนือ"){
          this.market[0]+=1
        }
        if(item.sector === "กลาง"){
          this.market[1]+=1
        }
        if(item.sector === "ใต้"){
          this.market[2]+=1
        }
        if(item.sector === "ตะวันออกเฉียงเหนือ"){
          this.market[3]+=1
        }
        if(item.sector === "ตะวันออก"){
          this.market[4]+=1
        }
        if(item.sector === "ตะวันตก"){
          this.market[5]+=1
        }
      }
      
      if(item.type ==="สถาปัตยกรรม" ){
        if(item.sector === "เหนือ"){
          this.building[0]+=1
        }
        if(item.sector === "กลาง"){
          this.building[1]+=1
        }
        if(item.sector === "ใต้"){
          this.building[2]+=1
        }
        if(item.sector === "ตะวันออกเฉียงเหนือ"){
          this.building[3]+=1
        }
        if(item.sector === "ตะวันออก"){
          this.building[4]+=1
        }
        if(item.sector === "ตะวันตก"){
          this.building[5]+=1
        }
    }
       
    })
  }

  setChart(){
    this.data = {
      labels: ['ภาคเหนือ','ภาคกลาง','ภาคใต้',"ภาคตะวันออกเฉียงเหนือ","ภาคตะวันออก", "ภาคตะวันตก"],
      datasets: [
          {
              label: 'ธรรมชาติ',
              data: this.nature,
              backgroundColor: [
                '#66BB6A'
            ]               
          },
          {
              label: 'วัฒนธรรม',
              data: this.culture,
              backgroundColor: [
                '#EC407A'
            ]
          },
          {
              label: 'ตลาด',
              data: this.market,
              backgroundColor: [
                '#4287f5'
            ]
          },
          {
              label: 'สถาปัตยกรรม',
              data: this.building,
              backgroundColor: [
                '#f5c242'
            ]
          }
      ]
  }
  }
  

}
