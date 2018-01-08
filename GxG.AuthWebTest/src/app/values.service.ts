import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from './Models/Order';

@Injectable()
export class ValuesService {
    constructor(private http: HttpClient) {}

    public getValues(token: string): Promise<Order[]> {

        let header = token ? new HttpHeaders({
            Authorization: `Bearer ${token}`
        }) : {};

        return this.http.get<Order[]>("/api/values", {headers: header})
            .toPromise()
    }
}
