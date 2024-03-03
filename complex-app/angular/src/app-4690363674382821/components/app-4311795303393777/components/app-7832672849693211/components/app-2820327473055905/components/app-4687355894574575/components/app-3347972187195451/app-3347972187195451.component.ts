import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3347972187195451',
  standalone: true,
  templateUrl: './app-3347972187195451.component.html',
  styleUrl: './app-3347972187195451.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3347972187195451Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
