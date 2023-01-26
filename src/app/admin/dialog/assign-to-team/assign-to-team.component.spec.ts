import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToTeamComponent } from './assign-to-team.component';

describe('AssignToTeamComponent', () => {
  let component: AssignToTeamComponent;
  let fixture: ComponentFixture<AssignToTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignToTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
