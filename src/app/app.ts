import { Component } from '@angular/core';
import {WelcomeAnimation} from './welcome-animation/welcome-animation';
import {environment} from '../../environment';
import {Header} from './header/header';

@Component({
  selector: 'app-root',
  imports: [WelcomeAnimation, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showSplash = environment.showSplashAnimation;

  onSplashFinished() {
    this.showSplash = false;
  }
}
