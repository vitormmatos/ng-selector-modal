import { TestBed } from '@angular/core/testing'

import { BootstrapModalService } from './bootstrap-modal.service'

describe('BootstrapModalService', () => {
  let service: BootstrapModalService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(BootstrapModalService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
