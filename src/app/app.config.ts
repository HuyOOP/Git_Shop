import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"project-01-e0094","appId":"1:687145643682:web:96fcc93e5bc44342f8b1fb","storageBucket":"project-01-e0094.appspot.com","apiKey":"AIzaSyDScPUiaBdTNUOxkxqRERi0iyBfbbaI2Fw","authDomain":"project-01-e0094.firebaseapp.com","messagingSenderId":"687145643682"})), provideAuth(() => getAuth())]
};
