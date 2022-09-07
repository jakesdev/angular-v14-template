import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ORGANIZATION_TOKEN_KEY } from '../constants';
import { AppStorage } from './storage';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(environment.apiURL)) {
      const orgId = AppStorage.getTokenData(ORGANIZATION_TOKEN_KEY);
      req = req.clone({
        setHeaders: {
          'organization': `${orgId}`,
          'authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkwtU25Pb2paVTNhWHBtYXVXZTFUbiJ9.eyJpc3MiOiJodHRwczovL2lsMmUtZGV2LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MjY4ZGI3YjY4Y2U5YzAwNjk1MjU0NzkiLCJhdWQiOlsiaHR0cHM6Ly9pbDJlLWRldi51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vaWwyZS1kZXYudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1MTcyMjUzNywiZXhwIjoxNjUxODA4OTM3LCJhenAiOiJOM3haR3lobzBKRmhFN1prOXppYVRuMXo1SUZjZnRHUSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgcmVhZDpjdXJyZW50X3VzZXIifQ.Xovw-02ROGYHASyJodHGHEcfExDjv9z05r0fEI9T2u2eFQenz7gFq-jA8kNGCHsqNwZN2GfJOOT2gUW-XRJz_2yuuZx6ztveZc25x93hBkYW7coPJspteV-QjVbxRkmdnySTRCxYze_krB0ECA1twWrQoOGO-RAv5DdKXgMljltS0Mdoi88q_h_XK_xnjuyAoW6Wt7Yw0tEWPZbh06vSzqSFKBN2ReQPtFoYQpO8TgJzMOGxMAms2KwCrsjn2FOkx5wWtEy80pNPHVkEiq7YHYVwv8e6u1byVPf6y-DR8RBIWAaW0B2kgWIwNh4EiTq4yp7Fk8wVHp78BmpBrXQFiA`
        },
      });
    }

    return next.handle(req);
  }
}
