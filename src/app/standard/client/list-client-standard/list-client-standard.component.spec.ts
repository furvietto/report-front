import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientStandardComponent } from './list-client-standard.component';

describe('ListClientStandardComponent', () => {
  let component: ListClientStandardComponent;
  let fixture: ComponentFixture<ListClientStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClientStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
