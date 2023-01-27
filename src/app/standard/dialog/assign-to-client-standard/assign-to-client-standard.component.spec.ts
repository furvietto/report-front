import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToClientStandardComponent } from './assign-to-client-standard.component';

describe('AssignToClientStandardComponent', () => {
  let component: AssignToClientStandardComponent;
  let fixture: ComponentFixture<AssignToClientStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignToClientStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignToClientStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
