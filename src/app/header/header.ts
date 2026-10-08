import { Component, computed, inject, signal } from '@angular/core';
import { portfolio } from '../config/portfolio.config';
import { ThemeService } from '../core/theme.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  protected readonly theme = inject(ThemeService);
  protected readonly showThemeToggle = portfolio.theme.showToggle;
  protected readonly menuOpen = signal(false);

  protected readonly navItems = portfolio.sectionOrder
    .map((id) => ({ id, section: portfolio.sections[id] }))
    .filter(({ section }) => section.enabled && section.navLabel)
    .map(({ id, section }) => ({ label: section.navLabel!, href: `#${id}` }));

  protected readonly themeIcon = computed(() => (this.theme.mode() === 'dark' ? 'light_mode' : 'dark_mode'));

  protected readonly themeLabel = computed(() =>
    this.theme.mode() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
  );
  protected readonly portfolio = portfolio;
}
