import { ListUsersProxyService } from './list-users-proxy.service';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ListUsersService {

  constructor(private proxy: ListUsersProxyService) { }

  getUsers(): any {
    return this.proxy.getUsers().map(
      (response) => {
        let listUsers: User[] = [];
        const data = response.json();
        data.forEach(d => {
          const user: User = {
            login: d.login,
            avatar: d.avatar_url,
            url: d.url,
            admin: d.site_admin
          };
          //listUsers.push(user);
          listUsers = [...listUsers, user];
        });
        return listUsers;
      }
    );
  }

}
