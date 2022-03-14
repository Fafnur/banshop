import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTimeComponent } from './chat-time.component';

describe('ChatTimeComponent', () => {
  let component: ChatTimeComponent;
  let fixture: ComponentFixture<ChatTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatTimeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
