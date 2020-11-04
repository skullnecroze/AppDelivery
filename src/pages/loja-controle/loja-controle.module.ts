import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LojaControlePage } from './loja-controle';

@NgModule({
  declarations: [
    LojaControlePage,
  ],
  imports: [
    IonicPageModule.forChild(LojaControlePage),
  ],
})
export class LojaControlePageModule {}
