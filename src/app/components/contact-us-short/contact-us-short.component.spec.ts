import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsShortComponent } from './contact-us-short.component';

describe('ContactUsShortComponent', () => {
  let component: ContactUsShortComponent;
  let fixture: ComponentFixture<ContactUsShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsShortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
