import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6793446474162659',
  standalone: true,
  templateUrl: './app-6793446474162659.component.html',
  styleUrl: './app-6793446474162659.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6793446474162659Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
