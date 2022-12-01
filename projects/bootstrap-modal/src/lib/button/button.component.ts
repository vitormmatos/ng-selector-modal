import { Component, EventEmitter, Input, Output } from '@angular/core'

const buttonTypes = [
  { id: 0, buttonType: 'primary' },
  { id: 1, buttonType: 'secondary' },
  { id: 2, buttonType: 'success' },
  { id: 3, buttonType: 'danger' },
  { id: 4, buttonType: 'warning' },
  { id: 5, buttonType: 'info' },
  { id: 6, buttonType: 'light' },
  { id: 7, buttonType: 'dark' },
  { id: 8, buttonType: 'link' }
]

const sizeTypes = [
  { id: 0, size: 'btn-sm' },
  { id: 1, size: '' },
  { id: 2, size: 'btn-lg' }
]

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonTypeId = 0
  @Input() outline = false
  @Input() sizeId = 1
  @Output() clickEmitter = new EventEmitter()

  getClass (): string {
    const buttonClass: string = this.buttonTypeId >= 0 && this.buttonTypeId <= 8 ? buttonTypes[this.buttonTypeId].buttonType : buttonTypes[0].buttonType
    const sizeClass: string = this.sizeId >= 0 && this.sizeId <= 2 ? sizeTypes[this.sizeId].size : sizeTypes[1].size
    const outlineClass: string = this.outline && this.buttonTypeId !== 8 ? 'outline-' : ''
    return `btn btn-${outlineClass}${buttonClass} ${sizeClass}`
  }

  onClick (): void {
    this.clickEmitter.emit(true)
  }
}
