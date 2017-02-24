import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Interview } from '../../_models/index';
import { AuthenticationService } from '../../_services/index';


@Injectable()
export class InterviewService {

    constructor(private http: Http, private authenticationService: AuthenticationService) { }
	
    getAll() {
        return this.http.get(this.authenticationService.workHost()+'/api/interview', this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message));
    }

    getById(id: number) { 
        return this.http.get(this.authenticationService.workHost()+'/api/interview/' + id, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    create(affairs: Interview) {
        return this.http.post(this.authenticationService.workHost()+'/api/interview', affairs, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    update(affairs: Interview) {
        return this.http.put(this.authenticationService.workHost()+'/api/interview/' + affairs.id, affairs, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    delete(id: number) {
        return this.http.delete(this.authenticationService.workHost()+'/api/interview/' + id, this.authenticationService.jwt())
								.map((response: Response) => response.json())
								.catch((error:any) => Observable.throw(error.json().message));
    }

}