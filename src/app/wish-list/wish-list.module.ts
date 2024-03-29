import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { WishListPage } from './wish-list.page'

import { WishListPageRoutingModule } from './wish-list-routing.module'
import { ComponentsModule } from '../components/components.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WishListPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [WishListPage],
})
export class WishListPageModule {}
