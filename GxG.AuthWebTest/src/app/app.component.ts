import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from './Models/Token';
import { AuthenticationService } from "./authentication.service";
import {ValuesService} from "./values.service";
import {Order} from './Models/Order';

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
    orders: Promise<Order[]>;

    constructor(private http: HttpClient, private auth: AuthenticationService, private valuesService: ValuesService) {
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

    getValues() {
        let myToken = this.token ? this.token.access_token : null;

        this.orders = this.valuesService.getValues(myToken)
            .then(orders => {
                this.messages = [];
                return orders;
            })
            .catch(reason => {
                if (reason && reason.status && reason.status === 401) {
                    this.messages.push("Unauthorized");
                    return [];
                }

                this.messages.push("Getting orders failed: " + reason);
                return [];
            });
    }
}
