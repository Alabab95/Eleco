import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlammesPage } from './flammes';

@NgModule({
  declarations: [
    FlammesPage,
  ],
  imports: [
    IonicPageModule.forChild(FlammesPage),
  ],
})
export class FlammesPageModule {}
