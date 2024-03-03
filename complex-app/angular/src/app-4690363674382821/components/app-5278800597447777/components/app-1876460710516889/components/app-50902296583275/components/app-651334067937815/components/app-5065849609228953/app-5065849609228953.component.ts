import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5065849609228953',
  standalone: true,
  templateUrl: './app-5065849609228953.component.html',
  styleUrl: './app-5065849609228953.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5065849609228953Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
