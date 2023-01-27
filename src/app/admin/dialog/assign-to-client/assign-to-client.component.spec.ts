import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToClientComponent } from './assign-to-client.component';

describe('AssignToClientComponent', () => {
  let component: AssignToClientComponent;
  let fixture: ComponentFixture<AssignToClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignToClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignToClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
