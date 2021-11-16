import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareService } from './services/share.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { BannerComponent } from './components/banner/banner.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SeachbarComponent } from './components/seachbar/seachbar.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { TableComponent } from './components/admin-form/table/table.component';
import { AlltableComponent } from './components/admin-form/alltable/alltable.component';
import { AdNavbarComponent } from './components/admin-form/navbar/navbar.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ChartComponent } from './components/admin-form/chart/chart.component';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    DetailComponent,
    NotFoundComponentComponent,
    BannerComponent,
    SlideshowComponent,
    SeachbarComponent,
    AdminFormComponent,
    TableComponent,
    AlltableComponent,
    AdNavbarComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule,
    ChartModule,
    TableModule,
    ButtonModule,
    MessageModule,
    TabMenuModule,
    ConfirmDialogModule,
  
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
