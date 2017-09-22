import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarDrawerComponent } from './components/sidebar-drawer/sidebar-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarDrawerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
