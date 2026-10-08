import { Component } from '@angular/core';
import { portfolio } from '../config/portfolio.config';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatIcon],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly section = portfolio.sections.projects;
}
