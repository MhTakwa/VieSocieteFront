import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { WsSideBarComponent } from './workspace/ws-side-bar/ws-side-bar.component';
import { WsNavbarComponent } from './workspace/ws-navbar/ws-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    WsSideBarComponent,
    WsNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    WsSideBarComponent,
    WsNavbarComponent
  ]
})
export class SharedModule { }
