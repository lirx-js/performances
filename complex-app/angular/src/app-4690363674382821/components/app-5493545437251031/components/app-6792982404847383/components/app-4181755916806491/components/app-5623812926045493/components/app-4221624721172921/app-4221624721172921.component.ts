import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4221624721172921',
  standalone: true,
  templateUrl: './app-4221624721172921.component.html',
  styleUrl: './app-4221624721172921.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4221624721172921Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
