import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyHerosComponent } from './fly-heros.component';

describe('FlyHerosComponent', () => {
  let component: FlyHerosComponent;
  let fixture: ComponentFixture<FlyHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
