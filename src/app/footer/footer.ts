import { Component } from '@angular/core';
import { portfolio } from '../config/portfolio.config';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly socials = portfolio.footer.socials;
  protected readonly copyright = portfolio.footer.copyright.replace(
    '{year}',
    String(new Date().getFullYear()),
  );
}
