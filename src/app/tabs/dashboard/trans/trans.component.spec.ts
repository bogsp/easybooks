import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransComponent } from './trans.component';

describe('TransComponent', () => {
  let component: TransComponent;
  let fixture: ComponentFixture<TransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
