import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./product.component";


const routes: Routes = [
  // { path: 'product/:name', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'product/:name', component: ProductComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
