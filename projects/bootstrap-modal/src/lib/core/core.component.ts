import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'lib-core',
  template: '',
  styleUrls: []
})
export class CoreComponent {
  @Input() title: string = ''
  @Input() array!: unknown[]
  @Input() arrayProperty!: string
  @Input() saveButtonTitle: string = 'Save'
  @Output() savedUpdatedArray = new EventEmitter()
  @Output() savedRemovedArray = new EventEmitter()

  modalRef: any
  
  constructor (private modalService: NgbModal) {
    this.modalRef = this.modalService.open(ModalComponent)
  }

  ngOnInit(){
    this.modalRef.componentInstance.title = this.title
    this.modalRef.componentInstance.array = this.array
    this.modalRef.componentInstance.arrayProperty = this.arrayProperty
    this.modalRef.componentInstance.saveButtonTitle = this.saveButtonTitle
    this.modalRef.componentInstance.savedUpdatedArray = this.savedUpdatedArray
    this.modalRef.componentInstance.savedRemovedArray = this.savedRemovedArray
  }
}
