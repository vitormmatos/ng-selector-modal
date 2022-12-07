import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'lib-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  providers: [NgbTypeaheadConfig]
})
export class TypeaheadComponent {
  public model: any
  @Input() array!: any[]
  @Input() arrayProperty!: string
  @Output() objOut = new EventEmitter()

  constructor (config: NgbTypeaheadConfig) {
    config.showHint = true
  }

  search = (text$: Observable<string>): Observable<unknown[]> =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.array
            .filter(v => v[this.arrayProperty].toLowerCase().startsWith(term.toLocaleLowerCase()))
            .splice(0, 10)
      )
    )    
}
