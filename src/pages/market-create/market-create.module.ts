import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketCreatePage } from './market-create';

@NgModule({
  declarations: [
    MarketCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(MarketCreatePage),
  ],
})
export class MarketCreatePageModule {}
