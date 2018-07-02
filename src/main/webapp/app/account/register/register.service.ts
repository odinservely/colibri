import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import {IUser, User} from 'app/core';

type EntityResponseType = HttpResponse<User>;

@Injectable({ providedIn: 'root' })
export class Register {
    constructor(private http: HttpClient) {}

    save(account: any): Observable<EntityResponseType> {
        return this.http.post<IUser>(SERVER_API_URL + 'api/register', account, {observe: 'response'});
    }
}
