import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSecurityAssessmentComponent } from './product-security-assessment.component';

describe('ProductSecurityAssessmentComponent', () => {
  let component: ProductSecurityAssessmentComponent;
  let fixture: ComponentFixture<ProductSecurityAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSecurityAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSecurityAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
