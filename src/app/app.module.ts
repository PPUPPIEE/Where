import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ShareService } from './services/share.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { BannerComponent } from './components/banner/banner.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';



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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
