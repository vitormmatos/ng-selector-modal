import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import {
  NgbModule,
  NgbModalModule,
  NgbDropdownModule,
  NgbTypeaheadModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap'

import { ButtonComponent } from './button/button.component'
import { ModalComponent } from './modal/modal.component'
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { CoreComponent } from './core/core.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    TypeaheadComponent,
    CoreComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
  ],
  exports: [ModalComponent, ButtonComponent, CoreComponent]
})
export class BootstrapModalModule {}
