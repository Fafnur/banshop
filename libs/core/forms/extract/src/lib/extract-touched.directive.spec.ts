import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { ExtractTouchedDirective } from './extract-touched.directive';

@Component({
  template: `<div banshopExtractTouched [control]="control"></div>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
  @ViewChild(ExtractTouchedDirective) directive!: ExtractTouchedDirective;
}

describe('ExtractTouchedDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [ExtractTouchedDirective, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
  });

  it('should create an instance directive', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance.directive).toBeTruthy();
  });

  it('should call markForCheck after control touched', () => {
    fixture.detectChanges();

    const spy = jest.spyOn((fixture.componentInstance.directive as any).changeDetectorRef, 'markForCheck');
    fixture.componentInstance.control.markAsTouched();

    expect(spy).toHaveBeenCalled();
  });
});
