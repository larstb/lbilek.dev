import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';
import { portfolio } from '../config/portfolio.config';

@Component({
  selector: 'app-welcome-animation',
  imports: [
    LottieComponent
  ],
  templateUrl: './welcome-animation.html',
  styleUrl: './welcome-animation.scss'
})
export class WelcomeAnimation implements OnInit {
  @Output() finished = new EventEmitter<void>();

  options: AnimationOptions = {
    path: '/animations/splash.json'
  };

  ngOnInit() {
    if (portfolio.animation.showSplashAnimation) {
      setTimeout(() => {
        this.finished.emit();
      }, portfolio.animation.splashAnimationDuration);
    }
  }

  protected readonly portfolio = portfolio;
}
