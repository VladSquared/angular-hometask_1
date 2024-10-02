import { Component } from '@angular/core';
import { User, Gender } from '../user.model'

@Component({
  selector: 'app-user-list-main',
  templateUrl: './user-list-main.component.html',
  styleUrl: './user-list-main.component.css'
})
export class UserListMainComponent {

  users: User[] = [
    { firstName: 'John', lastName: 'Doe', age: 25, gender: Gender.Male, activated: true },
    { firstName: 'Jane', lastName: 'Smith', age: 30, gender: Gender.Female, activated: false },
    { firstName: 'Sam', lastName: 'Williams', age: 22, gender: Gender.Other, activated: true },
    { firstName: 'Alice', lastName: 'Johnson', age: 28, gender: Gender.Female, activated: true },
    { firstName: 'Bob', lastName: 'Brown', age: 35, gender: Gender.Male, activated: false }
  ];

  deleteUser(index: number) {
    console.log('deleted index', index)
    this.users.splice(index, 1);
  }
}
