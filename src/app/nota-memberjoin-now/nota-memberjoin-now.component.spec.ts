import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaMemberjoinNowComponent } from './nota-memberjoin-now.component';

describe('NotaMemberjoinNowComponent', () => {
  let component: NotaMemberjoinNowComponent;
  let fixture: ComponentFixture<NotaMemberjoinNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaMemberjoinNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaMemberjoinNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
