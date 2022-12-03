import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
  NgbModule,
  NgbModalModule,
  NgbDatepickerModule,
  NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap'

import { BootstrapModalComponent } from './bootstrap-modal.component'
import { ButtonComponent } from './button/button.component'
import { ModalComponent } from './modal/modal.component'
import { TypeaheadComponent } from './typeahead/typeahead.component'

@NgModule({
  declarations: [
    BootstrapModalComponent,
    ButtonComponent,
    ModalComponent,
    TypeaheadComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbTypeaheadModule
  ],
  exports: [BootstrapModalComponent, ModalComponent, ButtonComponent]
})
export class BootstrapModalModule {}
