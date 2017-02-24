import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Question } from '../../_models/index';
import { AuthenticationService } from '../../_services/index';

@Injectable()
export class QuestionService {

    constructor(private http: Http, private authenticationService: AuthenticationService) { }
	
    getAll(interviewID: number) {
        return this.http.get(this.authenticationService.workHost()+'/api/questions/'+interviewID, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message));
    }

    getById(id: number) { 
        return this.http.get(this.authenticationService.workHost()+'/api/question/' + id, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    create(questions: Question) {
        return this.http.post(this.authenticationService.workHost()+'/api/question', questions, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    update(questions: Question) {
        return this.http.put(this.authenticationService.workHost()+'/api/question/' + questions.id, questions, this.authenticationService.jwt())
							.map((response: Response) => response.json())
							.catch((error:any) => Observable.throw(error.json().message))
    }

    delete(id: number) {
        return this.http.delete(this.authenticationService.workHost()+'/api/question/' + id, this.authenticationService.jwt())
								.map((response: Response) => response.json())
								.catch((error:any) => Observable.throw(error.json().message));
    }


}
