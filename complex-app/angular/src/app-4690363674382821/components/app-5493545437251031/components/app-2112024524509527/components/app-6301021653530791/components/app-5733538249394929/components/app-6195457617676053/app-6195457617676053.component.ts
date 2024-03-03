import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6195457617676053',
  standalone: true,
  templateUrl: './app-6195457617676053.component.html',
  styleUrl: './app-6195457617676053.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6195457617676053Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
