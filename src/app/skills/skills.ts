import { Component } from '@angular/core';
import { portfolio } from '../config/portfolio.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly section = portfolio.sections.skills;
  protected readonly asCards = this.section.groups.some((group) => group.name);
}
