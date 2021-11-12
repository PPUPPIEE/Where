import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { dataTable } from './data';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
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


  openCorrectDialog(content:any) {
    this.modalService.open(content, { centered: true });
  }
  openDeleteDialog(content:any) {
    this.modalService.open(content, { centered: true });
  }

  onConfirm(name: string) {
    this.http
      .patch(this.share.apiChangeStatus, {
        name: name,
        check: true,
      })
      .subscribe((e) => {
        window.location.reload();
      });
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
      .get<dataTable[]>(this.share.apiGetUnchecked)
      .subscribe((res) => {
        this.data = res;
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
