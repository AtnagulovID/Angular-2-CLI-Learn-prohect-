import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../_models/index';
import {TranslateService} from "../_translate/translate.service";


@Injectable()
export class AuthenticationService {
	HostUrl = 'http://atnagulovid.myjino.ru';
	//HostUrl = '';
	constructor(private http: Http,
				private translateService: TranslateService
				) { }

    login(username: string, password: string): Observable<boolean> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		return this.http.post(this.HostUrl + '/api/user', JSON.stringify({ username: username, password: password }), {headers})
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
					return true;					
                } else {
                    return false;
                }
            });
    }

    logout(): void {
		localStorage.removeItem('currentUser');
    }
	
	isLoggedIn() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser && currentUser.token;
	}	
	
    jwt() { 
        // create authorization header with jwt token
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Content-Language', this.translateService.currentLang);		
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
			headers.append('Authorization', currentUser.token);
        }
		return new RequestOptions({ headers: headers });
    }

    workHost() { 
		return this.HostUrl;
    }
	
	getCurrentUser()
	{
		return JSON.parse(localStorage.getItem('currentUser'));
	}
	
    create(user: User) {
        return this.http.post(this.workHost()+'/api/users', user, this.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

	
}