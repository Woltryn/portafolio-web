import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOfMyComponent } from './about-of-my.component';

describe('AboutOfMyComponent', () => {
  let component: AboutOfMyComponent;
  let fixture: ComponentFixture<AboutOfMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOfMyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOfMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
