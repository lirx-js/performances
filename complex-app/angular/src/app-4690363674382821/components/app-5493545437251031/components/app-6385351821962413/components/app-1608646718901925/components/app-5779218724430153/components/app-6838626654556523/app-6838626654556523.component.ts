import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6838626654556523',
  standalone: true,
  templateUrl: './app-6838626654556523.component.html',
  styleUrl: './app-6838626654556523.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6838626654556523Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
