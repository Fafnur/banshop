import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum RowAutomation {
  Row = 'row',
}

export class RowComponentPo extends PageObject {
  get row(): DebugElement | null {
    return this.getByAutomationId(RowAutomation.Row);
  }

  hasRowClass(className: string): boolean {
    return this.row?.classes[className] ?? false;
  }

  setMode(mode: string): void {
    if (this.row?.componentInstance) {
      this.row.componentInstance.mode = mode;
    }
  }
}
