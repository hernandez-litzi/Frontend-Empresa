import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

// Habilita HttpClient en toda la aplicación
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Manejo global de errores
    provideBrowserGlobalErrorListeners(),

    // Habilita el sistema de rutas
    provideRouter(routes),

    // Permite usar HttpClient en servicios y componentes
    provideHttpClient()
  ]
};
