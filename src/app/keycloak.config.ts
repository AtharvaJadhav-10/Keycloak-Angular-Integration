import { KeycloakConfig } from "keycloak-js";
const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080',
  realm: 'Angular-web',
  clientId: 'angular-web-client'
};

export const environment = {
  production: false,
  keycloak: keycloakConfig
};
