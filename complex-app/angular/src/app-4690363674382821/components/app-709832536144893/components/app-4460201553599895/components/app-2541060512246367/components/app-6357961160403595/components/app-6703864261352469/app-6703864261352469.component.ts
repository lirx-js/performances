import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6703864261352469',
  standalone: true,
  templateUrl: './app-6703864261352469.component.html',
  styleUrl: './app-6703864261352469.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6703864261352469Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
