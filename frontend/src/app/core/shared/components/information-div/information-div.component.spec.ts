import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDivComponent } from './information-div.component';

describe('InformationDivComponent', () => {
  let component: InformationDivComponent;
  let fixture: ComponentFixture<InformationDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
