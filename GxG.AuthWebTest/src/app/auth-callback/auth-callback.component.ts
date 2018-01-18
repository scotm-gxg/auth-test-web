import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth-callback',
    templateUrl: './auth-callback.component.html',
    styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

    constructor(
      private authService: AuthenticationService,
      private router: Router
    ) { }

    ngOnInit() {
      this.authService.completeAuthentication()
          .then(() => {
              this.router.navigate(['home'])
          });
    }

}
