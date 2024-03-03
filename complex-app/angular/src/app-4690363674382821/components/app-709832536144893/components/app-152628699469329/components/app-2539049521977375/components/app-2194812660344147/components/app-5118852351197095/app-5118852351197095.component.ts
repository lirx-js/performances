import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5118852351197095',
  standalone: true,
  templateUrl: './app-5118852351197095.component.html',
  styleUrl: './app-5118852351197095.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5118852351197095Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
