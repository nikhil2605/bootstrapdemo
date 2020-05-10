import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = new Array();

  constructor() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log("Inside first then");
        return response.json();
      })
      .then(usersResponse => {
        console.log(usersResponse);
        usersResponse.forEach(user => {
          this.users.push(user);
        });
      });

  }

  ngOnInit(): void {
  }

}
