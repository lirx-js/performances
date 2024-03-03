import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6898652143376161',
  standalone: true,
  templateUrl: './app-6898652143376161.component.html',
  styleUrl: './app-6898652143376161.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6898652143376161Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
