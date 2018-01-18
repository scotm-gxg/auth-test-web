import { Component, OnInit } from '@angular/core';
import {Order} from "../Models/Order";
import {Token} from "../Models/Token";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../authentication.service";
import {ValuesService} from "../values.service";
import {User} from "oidc-client";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    userName: string;
    pwd: string;
    messages: string[] = [];
    token: Token;
    orders: Promise<Order[]>;
    user: User;

    constructor(private http: HttpClient, private auth: AuthenticationService, private valuesService: ValuesService) { }

    ngOnInit() {
        this.auth.getUser().then(user => {
            if (!user) return;

            this.user = user;

            this.token = {
                token_type: user.token_type,
                access_token: user.access_token,
                expires_in: user.expires_in
            }
        });
    }

    attemptLogin() {
        this.auth.startAuthentication();


        /*this.auth.login()
            .then(user => {



                this.token = {
                    access_token: user.access_token,
                    token_type: "Bearer",
                    expires_in: null
                }
            });*/
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

                this.messages.push("Getting orders failed: " + JSON.stringify(reason));
                return [];
            });
    }

}
