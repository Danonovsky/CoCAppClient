import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypeAddComponent } from './item-type-add.component';

describe('ItemTypeAddComponent', () => {
  let component: ItemTypeAddComponent;
  let fixture: ComponentFixture<ItemTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
