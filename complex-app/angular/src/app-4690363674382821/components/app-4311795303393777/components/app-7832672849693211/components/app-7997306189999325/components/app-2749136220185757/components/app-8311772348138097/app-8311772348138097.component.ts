import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8311772348138097',
  standalone: true,
  templateUrl: './app-8311772348138097.component.html',
  styleUrl: './app-8311772348138097.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8311772348138097Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
