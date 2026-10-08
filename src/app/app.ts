import { Component, afterNextRender, signal } from '@angular/core';
import { WelcomeAnimation } from './welcome-animation/welcome-animation';
import { portfolio } from './config/portfolio.config';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { RevealDirective } from './core/reveal.directive';

const SPLASH_SHOWN_KEY = 'splash-shown';

@Component({
  selector: 'app-root',
  imports: [WelcomeAnimation, Header, Hero, Experience, Skills, Projects, Contact, Footer, RevealDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly showSplash = signal(false);
  protected readonly sections = portfolio.sectionOrder.filter((id) => portfolio.sections[id].enabled);

  constructor() {
    // The page itself is always rendered (and prerendered); the splash is an overlay shown in the browser only.
    afterNextRender(() => {
      const { showSplashAnimation, splashOncePerSession } = portfolio.animation;
      if (showSplashAnimation && !(splashOncePerSession && this.splashAlreadyShown())) {
        this.showSplash.set(true);
      }
    });
  }

  onSplashFinished() {
    this.showSplash.set(false);
  }

  private splashAlreadyShown(): boolean {
    try {
      const shown = sessionStorage.getItem(SPLASH_SHOWN_KEY) === 'true';
      sessionStorage.setItem(SPLASH_SHOWN_KEY, 'true');
      return shown;
    } catch {
      return false;
    }
  }
}
