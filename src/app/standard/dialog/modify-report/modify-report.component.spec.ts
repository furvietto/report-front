import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyReportComponent } from './modify-report.component';

describe('ModifyReportComponent', () => {
  let component: ModifyReportComponent;
  let fixture: ComponentFixture<ModifyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
