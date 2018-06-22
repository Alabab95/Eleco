import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LampPage } from './lamp';

@NgModule({
  declarations: [
    LampPage,
  ],
  imports: [
    IonicPageModule.forChild(LampPage),
  ],
})
export class LampPageModule {}
