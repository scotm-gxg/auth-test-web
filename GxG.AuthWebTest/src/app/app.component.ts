import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from './Models/Token';
import { AuthenticationService } from "./authentication.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    userName: string;
    pwd: string;
    messages: string[] = [];
    token: Token;

    constructor(private http: HttpClient, private auth: AuthenticationService) {
    }

    attemptLogin() {
        this.auth.login()
            .then(tokenString => {
                this.token = {
                    access_token: tokenString,
                    token_type: "Bearer",
                    expires_in: null
                }
            });
    }
}
