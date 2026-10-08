import { Component, signal } from '@angular/core';
import { WelcomeAnimation } from './welcome-animation/welcome-animation';
import { portfolio } from './config/portfolio.config';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [WelcomeAnimation, Header, Hero, Experience, Skills, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly showSplash = signal(portfolio.animation.showSplashAnimation);
  protected readonly sections = portfolio.sectionOrder.filter((id) => portfolio.sections[id].enabled);

  onSplashFinished() {
    this.showSplash.set(false);
  }
}
