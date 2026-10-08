import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Fades the element in when it scrolls into view.
 * Elements already visible on load, prerendered HTML and visitors who prefer reduced motion are left untouched,
 * so content is never hidden without JavaScript.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class RevealDirective {
  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const belowFold = element.getBoundingClientRect().top > window.innerHeight;
      if (reducedMotion || !belowFold || typeof IntersectionObserver === 'undefined') {
        return;
      }

      element.classList.add('reveal-pending');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.remove('reveal-pending');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
