import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title!: string
  @Input() saveButtonTitle!: string
  @Input() array!: any[]
  @Input() removedArray: any[] = []
  @Input() arrayProperty!: string
  @Output() savedArray = new EventEmitter()

  constructor(public activeModal: NgbActiveModal) {}
  
  select(obj: any){
    this.array = this.array.filter(item => item.id !== obj.id)
    this.removedArray.push(obj)
  }

  remove(obj: any){
    this.removedArray = this.removedArray.filter(item => item.id !== obj.id)
    this.array.push(obj)
  }
}
