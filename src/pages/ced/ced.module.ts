import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CedPage } from './ced';

@NgModule({
  declarations: [
    CedPage,
  ],
  imports: [
    IonicPageModule.forChild(CedPage),
  ],
})
export class CedPageModule {}
