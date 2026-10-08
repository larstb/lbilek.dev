import {
  ApplicationConfig, provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideLottieOptions} from 'ngx-lottie';
import {provideIcons} from './core/icons';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideIcons(),
    provideLottieOptions({
      // Loaded lazily, only when the splash animation is actually shown.
      player: () => import('lottie-web'),
    }), provideClientHydration(),
  ]
};
