import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetComponent } from './tabset/tabset.component';
import { MefDevTabsModule } from '@natec/mef-dev-ui-kit';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    TabsetComponent
  ],
  imports: [
    CommonModule,
    MefDevTabsModule,
    RouterModule.forChild([
      
      {
        path:"", component: TabsetComponent
      },      
    ]),
  ]
})
export class TabsetModule { }
