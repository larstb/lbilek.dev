import { Component, DOCUMENT, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
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
    .map(({ id, section }) => ({ id, label: section.navLabel!, href: `#${id}` }));

  /** Section currently in the middle of the viewport, highlighted in the navigation. */
  protected readonly activeId = signal<string | null>(null);

  constructor() {
    const document = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }
      // A thin band in the middle of the screen decides which section is "current".
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeId.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const item of this.navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          observer.observe(section);
        }
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected readonly themeIcon = computed(() => (this.theme.mode() === 'dark' ? 'light_mode' : 'dark_mode'));

  protected readonly themeLabel = computed(() =>
    this.theme.mode() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
  );
  protected readonly portfolio = portfolio;
}
