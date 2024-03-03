import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3156966571701881',
  standalone: true,
  templateUrl: './app-3156966571701881.component.html',
  styleUrl: './app-3156966571701881.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3156966571701881Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
