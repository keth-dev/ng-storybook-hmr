import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from './button/button.component';
import HeaderComponent from './header/header.component';
import PageComponent from './page/page.component';



@NgModule({
  declarations: [ButtonComponent, HeaderComponent, PageComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, HeaderComponent, PageComponent]
})
export class UiModule { }
