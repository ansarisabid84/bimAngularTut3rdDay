import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPracticalComponent } from './directives-practical.component';

describe('DirectivesPracticalComponent', () => {
  let component: DirectivesPracticalComponent;
  let fixture: ComponentFixture<DirectivesPracticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivesPracticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesPracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
