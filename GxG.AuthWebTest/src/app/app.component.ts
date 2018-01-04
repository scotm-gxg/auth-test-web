import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from './Models/Token';

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

    constructor(private http: HttpClient) {
    }

    attemptLogin() {
        const login = {
            userName: this.userName,
            password: this.pwd
        };

        this.http.post<Token>('/api/login', login)
            .subscribe(
                (resp) => {
                        this.messages.push("Authentication Success");
                        this.token = resp;
                    },
                (err) => this.messages.push("Authentication Failure")
            );
    }
}
