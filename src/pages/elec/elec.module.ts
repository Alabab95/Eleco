import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElecPage } from './elec';

@NgModule({
  declarations: [
    ElecPage,
  ],
  imports: [
    IonicPageModule.forChild(ElecPage),
  ],
})
export class ElecPageModule {}
