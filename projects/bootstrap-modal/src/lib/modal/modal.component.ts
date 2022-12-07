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
  @Input() arrayProperty!: string
  @Output() savedUpdatedArray = new EventEmitter()
  @Output() savedRemovedArray = new EventEmitter()
  removedArray: any[] = []

  constructor(public activeModal: NgbActiveModal) {}

  select(obj: any){
    this.array = this.array.filter(item => item.id !== obj.id)
    this.removedArray.push(obj)
  }

  remove(obj: any){
    this.removedArray = this.removedArray.filter(item => item.id !== obj.id)
    this.array.push(obj)
  }

  save() {
    this.savedUpdatedArray.emit(this.array)
    this.savedRemovedArray.emit(this.removedArray)
    this.activeModal.close()
  }
}
