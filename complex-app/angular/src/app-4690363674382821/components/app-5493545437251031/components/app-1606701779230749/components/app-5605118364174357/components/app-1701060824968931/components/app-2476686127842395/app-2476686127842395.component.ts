import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2476686127842395',
  standalone: true,
  templateUrl: './app-2476686127842395.component.html',
  styleUrl: './app-2476686127842395.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2476686127842395Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
