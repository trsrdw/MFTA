import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutionPage } from './solution.page';

describe('SolutionPage', () => {
  let component: SolutionPage;
  let fixture: ComponentFixture<SolutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
