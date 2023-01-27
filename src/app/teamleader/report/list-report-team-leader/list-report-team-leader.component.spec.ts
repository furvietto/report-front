import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportTeamLeaderComponent } from './list-report-team-leader.component';

describe('ListReportTeamLeaderComponent', () => {
  let component: ListReportTeamLeaderComponent;
  let fixture: ComponentFixture<ListReportTeamLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReportTeamLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReportTeamLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
