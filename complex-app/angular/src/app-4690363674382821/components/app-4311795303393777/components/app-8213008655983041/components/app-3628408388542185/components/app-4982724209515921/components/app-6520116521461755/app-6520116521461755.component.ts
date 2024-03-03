import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6520116521461755',
  standalone: true,
  templateUrl: './app-6520116521461755.component.html',
  styleUrl: './app-6520116521461755.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6520116521461755Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
