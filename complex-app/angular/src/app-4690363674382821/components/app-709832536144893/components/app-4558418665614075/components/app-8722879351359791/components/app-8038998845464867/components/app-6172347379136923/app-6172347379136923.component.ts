import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6172347379136923',
  standalone: true,
  templateUrl: './app-6172347379136923.component.html',
  styleUrl: './app-6172347379136923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6172347379136923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
