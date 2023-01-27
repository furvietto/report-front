import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeamMateComponent } from './list-team-mate.component';

describe('ListTeamMateComponent', () => {
  let component: ListTeamMateComponent;
  let fixture: ComponentFixture<ListTeamMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTeamMateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTeamMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
