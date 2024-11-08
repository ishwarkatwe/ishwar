import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesRecentComponent } from './notes-recent.component';

describe('NotesRecentComponent', () => {
  let component: NotesRecentComponent;
  let fixture: ComponentFixture<NotesRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesRecentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotesRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
