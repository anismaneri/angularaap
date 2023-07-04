import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { MobileComponent } from './mobile/mobile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CustdirDirective } from '../custdir.directive';
import { UtilityModule } from '../models/utility.module';

const prodRoutes : Routes = [
  {path:``,component:ProductComponent,children:[
    {path:`laptop`,component:LaptopComponent},
    {path:`tv`,component:TvComponent},
    {path:`tablet`,component:TabletComponent},
    {path:`mobile`,component:MobileComponent},
      ]},
]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    MobileComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule,
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsModule {
  constructor() {
    console.log("products modules called");
    
  }
 }
