import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Answer } from '../../_models/index';
import { AuthenticationService } from '../../_services/index';

@Injectable()
export class AnswerService {

    constructor(private http: Http, private authenticationService: AuthenticationService) { }
	
    getAll(questionID: number) {
        return this.http.get(this.authenticationService.workHost()+'/api/answers/'+questionID, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message));
    }

    getById(id: number) { 
        return this.http.get(this.authenticationService.workHost()+'/api/answer/' + id, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    create(answers: Answer) {
        return this.http.post(this.authenticationService.workHost()+'/api/answer', answers, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    update(answers: Answer) {
        return this.http.put(this.authenticationService.workHost()+'/api/answer/' + answers.id, answers, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    delete(id: number) {
        return this.http.delete(this.authenticationService.workHost()+'/api/answer/' + id, this.authenticationService.jwt())
								.map((response: Response) => response.json())
								.catch((error:any) => Observable.throw(error.json().message));
    }


}
