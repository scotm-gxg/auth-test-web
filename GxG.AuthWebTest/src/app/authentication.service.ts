import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import {Token} from "./Models/Token";

import { UserManager, UserManagerSettings, User } from "oidc-client";

@Injectable()
export class AuthenticationService {
    private userManager: UserManager;
    private user: User = null;

    constructor(private http: HttpClient) {
        const settings: UserManagerSettings = {
            authority: "http://localhost:5000",
            client_id: "js",
            redirect_uri: "http://localhost:5001/auth-callback",
            response_type: "id_token token",
            scope:"openid profile core.api",
            automaticSilentRenew: true,
            silent_redirect_uri: 'http://localhost:5001/assets/silent-refresh.html'
        };

        this.userManager = new UserManager(settings);

        this.userManager.getUser().then(user => {
            this.user = user;
        });
    }

    /*public login(): Promise<User> {
        return this.userManager.signinPopup();
    }*/

    public isLoggedIn(): boolean {
        return this.user !== null && !this.user.expired;
    }

    public getUser(): Promise<User> {
        return this.userManager.getUser();
    }

    public getClaims(): any {
        if (this.user) {
            return this.user.profile
        }

        return null;
    }

    public getAuthHeaderValue(): string {
        return `${this.user.token_type} ${this.user.access_token}`;
    }

    public startAuthentication(): Promise<void> {
        return this.userManager.signinRedirect();
    }

    public completeAuthentication(): Promise<void> {
        return this.userManager.signinRedirectCallback().then(user => {
            this.user = user;
        });
    }



}
