import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ListUsersProxyService } from './list-users-proxy.service';

describe('ListUsersProxyService', () => {
	beforeEach(() => {
	    TestBed.configureTestingModule({
			imports: [HttpModule],
	      	providers: [ListUsersProxyService]
	    });
  	});

	it('should be created', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
		expect(service).toBeTruthy();
	}));

	it ('should get users', async(() => {

		console.log("---- TEST USERS ----")

    	const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    	service.getUsers().subscribe(
      		(response) => expect(response.json()).not.toBeNull(),
      		(error) => fail(error)
    	);
  	}));

});
