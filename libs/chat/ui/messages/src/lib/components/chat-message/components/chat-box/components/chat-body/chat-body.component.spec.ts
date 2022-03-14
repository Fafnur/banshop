import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBodyComponent } from './chat-body.component';

describe('ChatBodyComponent', () => {
  let component: ChatBodyComponent;
  let fixture: ComponentFixture<ChatBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBodyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
