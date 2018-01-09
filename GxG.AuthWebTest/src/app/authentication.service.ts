import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Token} from "./Models/Token";

@Injectable()
export class AuthenticationService {


    constructor(private http: HttpClient) {

    }

    public login(userName:string,  pwd: string): Promise<string> {
        const creds = {
            username: userName,
            password: pwd
        };

        return this.http.post<Token>('/api/login', creds)
            .map(resp => {
                return resp.access_token
            })
            .toPromise();
    }


}
