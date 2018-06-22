import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImprimantesPage } from './imprimantes';

@NgModule({
  declarations: [
    ImprimantesPage,
  ],
  imports: [
    IonicPageModule.forChild(ImprimantesPage),
  ],
})
export class ImprimantesPageModule {}
