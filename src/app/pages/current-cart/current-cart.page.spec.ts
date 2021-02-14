import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentCartPage } from './current-cart.page';

describe('CurrentCartPage', () => {
  let component: CurrentCartPage;
  let fixture: ComponentFixture<CurrentCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
