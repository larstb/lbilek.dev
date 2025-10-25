import { Component } from '@angular/core';
import {WelcomeAnimation} from './welcome-animation/welcome-animation';
import {environment} from '../../environment';

@Component({
  selector: 'app-root',
  imports: [WelcomeAnimation],
  templateUrl: './app.html'
})
export class App {
  showSplash = environment.showSplashAnimation;

  onSplashFinished() {
    this.showSplash = false;
  }
}
