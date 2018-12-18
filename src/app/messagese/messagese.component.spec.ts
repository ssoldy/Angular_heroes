import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageseComponent } from './messagese.component';

describe('MessageseComponent', () => {
  let component: MessageseComponent;
  let fixture: ComponentFixture<MessageseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
