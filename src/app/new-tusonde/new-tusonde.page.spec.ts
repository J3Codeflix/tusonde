import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTusondePage } from './new-tusonde.page';

describe('NewTusondePage', () => {
  let component: NewTusondePage;
  let fixture: ComponentFixture<NewTusondePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTusondePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTusondePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
