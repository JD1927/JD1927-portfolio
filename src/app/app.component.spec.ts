import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'JD1927'`, () => {
    expect(component.title).toEqual('JD1927');
  });

  describe('#getPortfolioName()', () => {
    it(`Should get 'Portfolio: JD1927' when its called`, () => {
      // Arrange
      // Act
      const result = component.getPortfolioName();
      // Assert
      expect(result).toEqual(`Portfolio: JD1927`);
    });
  });

});
