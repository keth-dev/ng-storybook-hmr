import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLibModule } from '@cssinsurance/mycss-ui-lib';
import ButtonComponent from './ui/button/button.component';
import HeaderComponent from './ui/header/header.component';
import PageComponent from './ui/page/page.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, PageComponent],
  imports: [
    CommonModule, UiLibModule
  ],
  exports: [ButtonComponent, HeaderComponent, PageComponent]
})
export class MyUiLibModule { }
