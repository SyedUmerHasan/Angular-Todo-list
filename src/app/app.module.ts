import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    FooterComponent,
    MainbodyComponent,
    TodolistComponent,
    TodoitemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainbodyComponent },
      { path: 'todo', component: MainbodyComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
