import { DOCUMENT, Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolio } from '../config/portfolio.config';
import { ThemeMode } from '../config/portfolio.model';

const STORAGE_KEY = 'theme-mode';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /**
   * Stored choice from sessionStorage, falling back to the system preference.
   * While prerendering there is neither, so the static HTML follows the system theme via CSS.
   */
  readonly mode = signal<ThemeMode>(this.isBrowser ? (this.readStoredMode() ?? this.systemMode()) : 'light');

  constructor() {
    this.applyAccent();

    if (this.isBrowser) {
      effect(() => {
        this.document.documentElement.setAttribute('data-theme', this.mode());
      });
    }
  }

  /** Switches between light and dark and remembers the choice for this session. */
  toggle(): void {
    const next: ThemeMode = this.mode() === 'dark' ? 'light' : 'dark';
    this.mode.set(next);
    this.storeMode(next);
  }

  private systemMode(): ThemeMode {
    const prefersDark = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  private applyAccent(): void {
    const accent = portfolio.theme.accent;
    if (accent) {
      this.document.documentElement.style.setProperty(
        '--color-primary',
        `light-dark(${accent.light}, ${accent.dark})`,
      );
    }
  }

  private readStoredMode(): ThemeMode | null {
    try {
      const value = sessionStorage.getItem(STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }

  private storeMode(mode: ThemeMode): void {
    try {
      sessionStorage.setItem(STORAGE_KEY, mode);
    } catch {
      console.error('Theme could not be set');
    }
  }
}
