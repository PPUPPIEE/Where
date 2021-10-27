import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'search', component: SearchComponent},
  {path: 'detail', component: DetailComponent},
  {path: '404', component: NotFoundComponentComponent},
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
