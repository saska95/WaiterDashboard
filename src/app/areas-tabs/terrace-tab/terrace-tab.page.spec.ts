import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TerraceTabPage } from './terrace-tab.page';

describe('TerraceTabPage', () => {
  let component: TerraceTabPage;
  let fixture: ComponentFixture<TerraceTabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TerraceTabPage],
      imports: [IonicModule.forRoot(),
        // ExploreContainerComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TerraceTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
