import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDateComponent } from './chat-date.component';

describe('ChatDateComponent', () => {
  let component: ChatDateComponent;
  let fixture: ComponentFixture<ChatDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
