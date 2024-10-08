import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // <-- Import provideAnimations
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { routes } from './app.routes';
import { graphqlProvider } from './graphql.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    graphqlProvider,
    provideAnimations(), // <-- Add provideAnimations to the providers array
  ],
};
