import {
  ApplicationConfig, provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideLottieOptions} from 'ngx-lottie';
import player from 'lottie-web';
import {provideIcons} from './core/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideIcons(),
    provideLottieOptions({
      player: () => player,
    }),
  ]
};
