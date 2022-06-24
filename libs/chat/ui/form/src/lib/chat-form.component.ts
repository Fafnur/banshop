import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { takeUntil, tap } from 'rxjs';

import { ChatFacade } from '@banshop/chat/state';
import { DestroyService } from '@banshop/core/utils/destroy';

@Component({
  selector: 'banshop-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class ChatFormComponent implements OnInit {
  readonly form = new UntypedFormGroup({
    message: new UntypedFormControl(null),
  });

  submitted = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly chatFacade: ChatFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.chatFacade.createMessageFailure$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.chatFacade.createMessageSuccess$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.form.reset();
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (!this.submitted && this.form.value?.message?.length) {
      this.submitted = true;
      this.chatFacade.addMessage(this.form.value.message);
    }

    this.changeDetectorRef.markForCheck();
  }
}
