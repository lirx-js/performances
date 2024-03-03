import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5491768171253889',
  standalone: true,
  templateUrl: './app-5491768171253889.component.html',
  styleUrl: './app-5491768171253889.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5491768171253889Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
