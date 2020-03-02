import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const materialComponents = [MatButtonModule,MatIconModule,MatSidenavModule, MatIconModule,MatListModule,];

@NgModule({
  imports: [ materialComponents],
  exports :[materialComponents]
})
export class MaterialModule { }
