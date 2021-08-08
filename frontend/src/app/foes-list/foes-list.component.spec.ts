import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoesListComponent } from './foes-list.component';

describe('FoesListComponent', () => {
  let component: FoesListComponent;
  let fixture: ComponentFixture<FoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
