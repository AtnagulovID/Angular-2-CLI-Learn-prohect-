import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Affairs } from '../../_models/index';
import { AuthenticationService } from '../../_services/index';


@Injectable()
export class AffairsService {

    constructor(private http: Http, private authenticationService: AuthenticationService) { }
	
    getAll() {
        return this.http.get(this.authenticationService.workHost()+'/api/affairs', this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message));
    }

    getById(id: number) {
        return this.http.get(this.authenticationService.workHost()+'/api/affairs/' + id, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    create(affairs: Affairs) {
        return this.http.post(this.authenticationService.workHost()+'/api/affairs', affairs, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    update(affairs: Affairs) {
        return this.http.put(this.authenticationService.workHost()+'/api/affairs/' + affairs.id, affairs, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    delete(id: number) {
        return this.http.delete(this.authenticationService.workHost()+'/api/affairs/' + id, this.authenticationService.jwt())
								.map((response: Response) => response.json())
								.catch((error:any) => Observable.throw(error.json().message));
    }

}