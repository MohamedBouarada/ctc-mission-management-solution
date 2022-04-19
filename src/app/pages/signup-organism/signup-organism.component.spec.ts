import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOrganismComponent } from './signup-organism.component';

describe('SignupOrganismComponent', () => {
  let component: SignupOrganismComponent;
  let fixture: ComponentFixture<SignupOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupOrganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
