import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducComponent } from './educ.component';

describe('EducComponent', () => {
  let component: EducComponent;
  let fixture: ComponentFixture<EducComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
