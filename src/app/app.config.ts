import {
  ApplicationConfig, provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideLottieOptions} from 'ngx-lottie';
import player from 'lottie-web';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideLottieOptions({
      player: () => player,
    }),
  ]
};
