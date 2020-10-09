import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahmudComponent } from './mahmud.component';

describe('MahmudComponent', () => {
  let component: MahmudComponent;
  let fixture: ComponentFixture<MahmudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahmudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahmudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
