import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomeAnimation} from './welcome-animation/welcome-animation';
import {environment} from '../../environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeAnimation],
  templateUrl: './app.html'
})
export class App {
  showSplash = environment.showSplashAnimation;

  onSplashFinished() {
    this.showSplash = false;
  }
}
