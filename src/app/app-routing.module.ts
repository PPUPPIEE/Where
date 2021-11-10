import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import {TableComponent} from './components/admin-form/table/table.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'search', component: SearchComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'admin', component: AdminFormComponent },
  { path: 'table', component: TableComponent},
  { path: '404', component: NotFoundComponentComponent },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
