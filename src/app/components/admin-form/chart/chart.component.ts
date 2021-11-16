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
    
  constructor(
    private http: HttpClient,
    public share: ShareService,) {
      this.data = {
          labels: ['ภาคเหนือ','ภาคกลาง','ภาคใต้',"ภาคตะวันออก", "ภาคตะวันตก"],
          datasets: [
              {
                  label: 'ธรรมชาติ',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  backgroundColor: [
                    '#66BB6A'

                ]
                  
              },
              {
                  label: 'วัฒนธรรม',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  backgroundColor: [
                    '#EC407A'
                ]
              }
          ]
      }
  }

  ngOnInit(): void {
    this.http
      .get<dataTable[]>(this.share.apiGetall)
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
        
      });
  }

}
