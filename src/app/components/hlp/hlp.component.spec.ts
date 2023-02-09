import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlpComponent } from './hlp.component';

describe('HlpComponent', () => {
  let component: HlpComponent;
  let fixture: ComponentFixture<HlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
