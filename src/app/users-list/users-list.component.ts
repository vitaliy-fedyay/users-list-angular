import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];
  constructor(public usersServise: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersServise.getUserList();
  }

  search(query: string) {
    this.usersList = this.usersServise.userSearch(query);
  }

  sort(value: string) {
    return this.usersList = this.usersServise.userSort(value);
  }

}
