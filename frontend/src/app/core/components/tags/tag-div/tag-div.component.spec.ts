import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDivComponent } from './tag-div.component';

describe('TagDivComponent', () => {
  let component: TagDivComponent;
  let fixture: ComponentFixture<TagDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
