import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6184877313453011',
  standalone: true,
  templateUrl: './app-6184877313453011.component.html',
  styleUrl: './app-6184877313453011.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6184877313453011Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
