import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridMode } from '../grid.util';
import { RowComponent } from './row.component';
import { RowComponentPo } from './row.component.po';

@Component({
  template: `<banshop-row automation-id="row" [mode]="mode"></banshop-row>`,
})
class WrapperComponent {
  mode = GridMode.Handset;
}

describe('RowComponent', () => {
  let pageObject: RowComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [RowComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RowComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set class row-xs', () => {
    fixture.detectChanges();

    expect(pageObject.hasRowClass(`row-${GridMode.Handset}`)).toBeTruthy();
  });
});
