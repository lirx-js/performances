import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6019176894422257',
  standalone: true,
  templateUrl: './app-6019176894422257.component.html',
  styleUrl: './app-6019176894422257.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6019176894422257Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
