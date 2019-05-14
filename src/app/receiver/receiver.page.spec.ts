import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverPage } from './receiver.page';

describe('ReceiverPage', () => {
  let component: ReceiverPage;
  let fixture: ComponentFixture<ReceiverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
