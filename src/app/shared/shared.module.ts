import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
