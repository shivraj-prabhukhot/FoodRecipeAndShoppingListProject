import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIemComponent } from './recipe-iem.component';

describe('RecipeIemComponent', () => {
  let component: RecipeIemComponent;
  let fixture: ComponentFixture<RecipeIemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
