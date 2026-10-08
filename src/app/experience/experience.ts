import { Component, computed, input } from '@angular/core';
import { portfolio } from '../config/portfolio.config';
import { MatIcon } from '@angular/material/icon';

/** Timeline section, used for both work experience and education. */
@Component({
  selector: 'app-experience',
  imports: [MatIcon],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly sectionId = input<'experience' | 'education'>('experience');

  protected readonly section = computed(() => portfolio.sections[this.sectionId()]);
}
