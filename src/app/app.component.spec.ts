import { HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListUsersService } from './list-users/list-users.service';
import { ListUsersProxyService } from './list-users/list-users-proxy.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, ListUsersComponent
      ],
	  imports: [
		HttpModule  
	  ],
	  providers: [
		ListUsersService,
		ListUsersProxyService
	  ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
