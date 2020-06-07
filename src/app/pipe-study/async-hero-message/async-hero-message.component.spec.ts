import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncHeroMessageComponent } from './async-hero-message.component';

describe('AsyncHeroMessageComponent', () => {
  let component: AsyncHeroMessageComponent;
  let fixture: ComponentFixture<AsyncHeroMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncHeroMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncHeroMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
