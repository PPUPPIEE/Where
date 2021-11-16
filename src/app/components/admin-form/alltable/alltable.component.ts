import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { dataTable } from './data';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-alltable',
  templateUrl: './alltable.component.html',
  styleUrls: ['./alltable.component.scss'],
  styles: [`
        :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 200;
        }

        .layout-news-active :host ::ng-deep .p-datatable tr > th {
            top: 0;
        }
    `]
})
export class AlltableComponent implements OnInit {
  products: dataTable[] = [];

  data: dataTable[] = [];
  correct: string = 'correct';
  delete: string = 'delete';
  status: string = '';
  constructor(
    public share: ShareService,
    public router: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  openDeleteDialog(content:any) {
    this.modalService.open(content, { centered: true });
  }

  async Deleteimage(url: string[]) {
    url.forEach(url => {
      this.http
        .post(
          this.share.apiDeleteIMG,
          {
            name: url.substring(70, 87),
          },
          { responseType: 'text' }
        )
        .subscribe((e) => {console.log(e);
        });
    });
  }

  async onDelete(id: string,url: string[]) {
    await this.Deleteimage(url);
    this.http
      .delete(this.share.apiDeleteLocation + '/' + id)
      .subscribe((e) => {
        window.location.reload();
      });
  }


  ngOnInit(): void {
    this.http
      .get<dataTable[]>(this.share.apiGetall)
      .subscribe((res) => {
        this.data = res;
        this.products = res;
        console.log(this.data);
        
      });

    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      } else localStorage.removeItem('firstLoad');
    }

    if (this.share.checkTable === 'pass') {
    } else {
      this.router.navigate(['/admin']);
    }
  }

}
