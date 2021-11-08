import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./component/search/search.component";
import {ShowDetailsComponent} from "./component/show-details/show-details.component";

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path:'search', component: SearchComponent},
  {path: 'shows/:id', component: ShowDetailsComponent},
  {path: '**', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
