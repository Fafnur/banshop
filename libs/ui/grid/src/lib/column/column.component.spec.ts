import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridMode } from '../grid.util';
import { ColumnComponent } from './column.component';
import { ColumnComponentPo } from './column.component.po';

@Component({
  template: `<banshop-column automation-id="column" [modes]="modes"></banshop-column>`,
})
export class WrapperComponent {
  modes: Partial<Record<GridMode, number>> = { [GridMode.Handset]: 4, [GridMode.Tablet]: 3 };
}

describe('ColumnComponent', () => {
  let pageObject: ColumnComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [ColumnComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new ColumnComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.hasColumnClass('column-handset-4')).toBeTruthy();
    expect(pageObject.hasColumnClass('column-tablet-3')).toBeTruthy();
  });
});
