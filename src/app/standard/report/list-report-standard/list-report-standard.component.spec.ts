import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportStandardComponent } from './list-report-standard.component';

describe('ListReportStandardComponent', () => {
  let component: ListReportStandardComponent;
  let fixture: ComponentFixture<ListReportStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReportStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReportStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
