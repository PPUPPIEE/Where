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
    AdNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
