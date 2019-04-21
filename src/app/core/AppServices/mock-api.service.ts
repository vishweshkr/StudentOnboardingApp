import { ILogin, Login } from '../models';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


export class MockApiService  {
    public IsAuthenticated(login: ILogin) {
        let res = [new Login()];
        return of(res);    
      }
}