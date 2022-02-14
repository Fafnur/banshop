import { DebugElement } from '@angular/core';

import { PageObject } from '@banshop/core/testing';

enum Automation {
  Container = 'container',
}

export class ContainerComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  hasContainerClass(className: string): boolean {
    return this.container?.classes[className] ?? false;
  }

  setMode(mode: 'flex' | 'flex-row' | 'fluid'): void {
    if (this.container?.componentInstance) {
      this.container.componentInstance.mode = mode;
    }
  }

  setHeight(height: 'max-height'): void {
    if (this.container?.componentInstance) {
      this.container.componentInstance.height = height;
    }
  }
}
