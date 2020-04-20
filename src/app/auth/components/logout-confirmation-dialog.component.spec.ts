import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutConfirmationDialogComponent } from '../components';

describe('Logout Confirmation Dialog', () => {
  let fixture: ComponentFixture<LogoutConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [LogoutConfirmationDialogComponent],
    });

    fixture = TestBed.createComponent(LogoutConfirmationDialogComponent);
  });

  it('should compile', () => {
    fixture.detectChanges();

    // expect(fixture).toMatchSnapshot();
  });
});
