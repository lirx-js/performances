import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4535101296645759',
  standalone: true,
  templateUrl: './app-4535101296645759.component.html',
  styleUrl: './app-4535101296645759.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4535101296645759Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
