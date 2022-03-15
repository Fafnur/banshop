import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, verify, when } from 'ts-mockito';

import { ChatMessage } from '@banshop/chat/common';
import { ChatFacade } from '@banshop/chat/state';
import { FormExtractsModule } from '@banshop/core/forms/extract';
import { providerOf } from '@banshop/core/testing';
import { WidthModule } from '@banshop/ui/width';

import { ChatFormComponent } from './chat-form.component';
import { ChatFormComponentPo } from './chat-form.component.po';

describe('ChatFormComponent', () => {
  let pageObject: ChatFormComponentPo;
  let fixture: ComponentFixture<ChatFormComponent>;
  let chatFacadeMock: ChatFacade;
  let createMessageFailure$: ReplaySubject<HttpErrorResponse>;
  let createMessageSuccess$: ReplaySubject<ChatMessage>;

  beforeEach(() => {
    chatFacadeMock = mock(ChatFacade);
    createMessageFailure$ = new ReplaySubject<HttpErrorResponse>(1);
    createMessageSuccess$ = new ReplaySubject<ChatMessage>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MockModule(MatButtonModule),
        MockModule(MatIconModule),
        MockModule(MatInputModule),
        MockModule(FormExtractsModule),
        MockModule(WidthModule),
      ],
      declarations: [ChatFormComponent],
      providers: [providerOf(ChatFacade, chatFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(chatFacadeMock.createMessageFailure$).thenReturn(createMessageFailure$);
    when(chatFacadeMock.createMessageSuccess$).thenReturn(createMessageSuccess$);

    fixture = TestBed.createComponent(ChatFormComponent);
    pageObject = new ChatFormComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.form).toBeTruthy();
    expect(pageObject.textarea).toBeTruthy();
    expect(pageObject.labelText).toBe('Write a message');
    expect(pageObject.submitText).toBe('send');
  });

  it('should call method', () => {
    const message = 'Message with words';
    pageObject.setForm(message);

    pageObject.triggerSubmit();

    verify(chatFacadeMock.addMessage(message)).once();
  });
});
