import { Component } from '@angular/core';
import { portfolio } from '../config/portfolio.config';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  imports: [MatIcon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly hero = portfolio.sections.about;
  protected readonly socials = this.hero.showSocials ? portfolio.footer.socials : [];

  protected readonly initials = portfolio.name
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase())
    .slice(0, 3)
    .join('');
}
