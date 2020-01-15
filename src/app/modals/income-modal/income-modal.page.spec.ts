import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomeModalPage } from './income-modal.page';

describe('IncomeModalPage', () => {
  let component: IncomeModalPage;
  let fixture: ComponentFixture<IncomeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
