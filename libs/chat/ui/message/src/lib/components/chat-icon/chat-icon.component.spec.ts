import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIconComponent } from './chat-icon.component';

describe('ChatIconComponent', () => {
  let component: ChatIconComponent;
  let fixture: ComponentFixture<ChatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
