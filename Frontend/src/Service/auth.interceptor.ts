import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRegisterServiceService } from "./login-register-service.service";
import { LoginStatusService } from "./login-status.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginservice:LoginStatusService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add jwt token
        let auth=req;
        const token=this.loginservice.getToken();
        
        // console.log("-->",token);
        
        if(token!=null){
            auth=auth.clone({setHeaders:{
                Authorization:`Bearer ${token}`
            }})
            
        }

        return next.handle(auth);


        
    }

}

export const authInterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }
]