import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';
import {environment} from '../../../environment';

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

  protected readonly environment = environment;

  options: AnimationOptions = {
    path: '/animations/splash.json'
  };

  ngOnInit() {
    if (environment.showSplashAnimation) {
      setTimeout(() => {
        this.finished.emit();
      }, environment.splashAnimationDuration);
    }
  }
}
