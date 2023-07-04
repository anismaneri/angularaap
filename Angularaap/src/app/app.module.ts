import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DemoComponent } from './demo/demo.component';
import { HooksComponent } from './hooks/hooks.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { YComponent } from './product/washingmachin/y.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilpterpipeComponent } from './filpterpipe/filpterpipe.component';
import { FilterPipe } from './filter.pipe';

import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ProductsModule } from './product/products.module';
import { OrdersModule } from './orders/orders.module';
import { AdduserComponent } from './adduser/adduser.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    AttriComponent,
    
    DemoComponent,
    HooksComponent,
    DirassignComponent,
    SimpleFormComponent,
    AboutusComponent,
    ContactusComponent,
    
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    
    YComponent,
    ReactiveformComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PipedemoComponent,
    CountPipe,
    FilpterpipeComponent,
    FilterPipe,
    
    DemopostComponent,
    PostdetailsComponent,
    AdduserComponent,
    RapidapiComponent,
    
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("App module called");
    
  }
 }
