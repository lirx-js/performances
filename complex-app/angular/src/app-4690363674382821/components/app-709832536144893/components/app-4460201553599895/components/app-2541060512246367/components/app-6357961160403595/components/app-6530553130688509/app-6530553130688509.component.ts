import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6530553130688509',
  standalone: true,
  templateUrl: './app-6530553130688509.component.html',
  styleUrl: './app-6530553130688509.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6530553130688509Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
