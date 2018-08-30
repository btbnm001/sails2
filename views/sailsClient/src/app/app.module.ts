import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'
import { DemoComponent } from './demo/demo.component';
import { DemoService } from './demo/demo.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
