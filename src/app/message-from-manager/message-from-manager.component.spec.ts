import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFromManagerComponent } from './message-from-manager.component';

describe('MessageFromManagerComponent', () => {
  let component: MessageFromManagerComponent;
  let fixture: ComponentFixture<MessageFromManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageFromManagerComponent]
    });
    fixture = TestBed.createComponent(MessageFromManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
