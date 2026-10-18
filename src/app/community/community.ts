import { Component } from '@angular/core';
import { portfolio } from '../config/portfolio.config';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-community',
  imports: [MatIcon],
  templateUrl: './community.html',
  styleUrl: './community.scss',
})
export class Community {
  protected readonly section = portfolio.sections.community;
}
