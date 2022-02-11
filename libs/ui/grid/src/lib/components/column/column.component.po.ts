import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

import { GridMode } from '../../grid.util';

enum ColumnAutomation {
  Column = 'column',
}

export class ColumnComponentPo extends PageObject {
  get column(): DebugElement | null {
    return this.getByAutomationId(ColumnAutomation.Column);
  }

  hasColumnClass(className: string): boolean {
    return this.column?.classes[className] ?? false;
  }

  setMode(mode: string | GridMode): void {
    if (this.column?.componentInstance) {
      this.column.componentInstance.mode = mode;
    }
  }
}
