import { Component } from '@angular/core';

import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user?:User | null;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }
}
