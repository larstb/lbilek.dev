import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/** Brand icons that Material Icons doesn't include, served from `public/icons/<name>.svg`. */
export const SVG_ICONS = ['github', 'linkedin', 'twitter', 'facebook', 'instagram'] as const;

/** Uses the self-hosted outlined Material Icons font and registers the brand SVG icons for `<mat-icon svgIcon>`. */
export function provideIcons(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(),
    provideAppInitializer(() => {
      const registry = inject(MatIconRegistry);
      const sanitizer = inject(DomSanitizer);

      registry.setDefaultFontSetClass('material-icons-outlined');
      for (const name of SVG_ICONS) {
        registry.addSvgIcon(name, sanitizer.bypassSecurityTrustResourceUrl(`/icons/${name}.svg`));
      }
      registry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('/svg/header.svg'));
    }),
  ]);
}
