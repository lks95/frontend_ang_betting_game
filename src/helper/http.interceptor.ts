import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

//methode intercept um http anfragen zu prüfen und umzuwandeln
//bevor sie weiter an server geleitet werden
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  //übergeben des http objekt an intercept methode
  //http objekt in observable
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      // cookies im authentification header
      withCredentials: true,
    });

    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
