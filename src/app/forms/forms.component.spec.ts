import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {FormsComponent,User} from "../forms/forms.component";

describe('Component: Names', () => {

  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [FormsComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(FormsComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.nameForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors = {};
    let name = component.nameForm.controls['name'];
    expect(name.valid).toBeFalsy();

    // Name field is required
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set name to something
    name.setValue("test");
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set name to something correct
    name.setValue("Selva");
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('submitting a form emits a user', () => {
    expect(component.nameForm.valid).toBeFalsy();
    component.nameForm.controls['name'].setValue("Selva");
    expect(component.nameForm.valid).toBeTruthy();

    let user: User;
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);

    // Trigger the login function
    component.checkUnit();

    // Now we can check to make sure the emitted value is correct
    expect(user.name).toBe("Selva");
  });
})
;