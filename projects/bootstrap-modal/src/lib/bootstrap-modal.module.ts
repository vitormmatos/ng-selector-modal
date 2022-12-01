import { NgModule } from '@angular/core'
import { NgbModule, NgbModalModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { BootstrapModalComponent } from './bootstrap-modal.component'
import { ButtonComponent } from './button/button.component'
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    BootstrapModalComponent,
    ButtonComponent,
    ModalComponent
  ],
  imports: [
    NgbModule,
    NgbModalModule,
    NgbDatepickerModule
  ],
  exports: [
    BootstrapModalComponent,
    ModalComponent,
    ButtonComponent
  ]
})
export class BootstrapModalModule { }
