import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from './Models/Token';
import { AuthenticationService } from "./authentication.service";
import {ValuesService} from "./values.service";
import {Order} from './Models/Order';

import { User } from "oidc-client";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';


    constructor() {
    }


}
