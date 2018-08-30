import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'demo', component: DemoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
