import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { environment } from '../keycloak.config';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  constructor(
    private keycloakService: KeycloakService,
    private router: Router
  ) { }

  ngOnInit() {
    this.keycloakService.init({
      config: environment.keycloak,
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets']
    })
    .then((authenticated) => {
      if (!authenticated) {
        this.keycloakService.login();
      }
    })
    .catch((error) => console.error('Keycloak init failed', error));
  }
  
  goToSecondPage() {
    this.keycloakService.login();
  }
}
