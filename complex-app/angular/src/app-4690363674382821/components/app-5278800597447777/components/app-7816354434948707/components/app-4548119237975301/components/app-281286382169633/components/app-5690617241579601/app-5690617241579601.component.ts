import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5690617241579601',
  standalone: true,
  templateUrl: './app-5690617241579601.component.html',
  styleUrl: './app-5690617241579601.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5690617241579601Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
