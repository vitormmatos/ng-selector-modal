import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'lib-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BootstrapModalComponent {
  buttonClicked (event: Event): void {
    console.log(event)
  }
}
