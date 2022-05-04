import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavBarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      RouterModule.forRoot([
        {path:'',component:RegisterComponent},
        {path:'register',component: RegisterComponent}
      ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
