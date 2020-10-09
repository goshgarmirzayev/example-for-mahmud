import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MahmudComponent} from './components/mahmud/mahmud.component';


const routes: Routes = [
  {path: 'mahmud', component: MahmudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
