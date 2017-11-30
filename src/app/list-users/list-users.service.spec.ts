import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ListUsersService } from './list-users.service';
import { ListUsersProxyService } from './list-users-proxy.service';

describe('ListUsersService', () => {
  	beforeEach(() => {
    	TestBed.configureTestingModule({
			imports: [
		  		HttpModule
		  	],
      		providers: [ListUsersService, ListUsersProxyService]
    	});
  	});

  	it('should be created', inject([ListUsersService], (service: ListUsersService) => {
    	expect(service).toBeTruthy();
  	}));

	it('should get users', () => {
		const service: ListUsersService = TestBed.get(ListUsersService);

		service.getUsers().subscribe(
			(users) => {
				expect(users[0].login).toEqual('mojombo');
				expect(users[0].avatar).toBeDefined();
			}
		);
	});

});
