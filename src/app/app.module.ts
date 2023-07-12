import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGaugeModule } from 'ngx-gauge';
import {SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ViewDataComponent } from './components/view-data/view-data.component';
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGaugeModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
