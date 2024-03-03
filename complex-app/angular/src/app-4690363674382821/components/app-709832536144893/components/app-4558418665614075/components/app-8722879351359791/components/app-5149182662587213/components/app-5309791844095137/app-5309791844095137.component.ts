import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5309791844095137',
  standalone: true,
  templateUrl: './app-5309791844095137.component.html',
  styleUrl: './app-5309791844095137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5309791844095137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
