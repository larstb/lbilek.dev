import { Component } from '@angular/core';
import { portfolio } from '../config/portfolio.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly section = portfolio.sections.contact;
}
