import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu.component';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;
  let appTitle: DebugElement;
  let getLink: DebugElement;
  let addLink: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavMenuComponent]
    });

    //create component and text fixture
    fixture = TestBed.createComponent(NavMenuComponent);

    //get test component from the fixture
    component = fixture.componentInstance;

    //
    appTitle = fixture.debugElement.query(By.css('#app-title'));
    getLink = fixture.debugElement.query(By.css('#get-link'));
    addLink = fixture.debugElement.query(By.css('#add-link'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have app title', () => {
    expect(appTitle.nativeElement.textContent).toBe("Workout Tracker App");
  })

  it('should have get emps list link', () => {
    expect(getLink.nativeElement.textContent).toBe("Employees");
  })

  it('should have add emp link title', () => {
    expect(addLink.nativeElement.textContent).toBe("Add Employee");
  })

});
