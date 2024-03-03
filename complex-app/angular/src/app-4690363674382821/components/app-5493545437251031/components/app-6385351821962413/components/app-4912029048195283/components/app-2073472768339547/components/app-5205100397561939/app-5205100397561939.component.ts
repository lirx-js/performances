import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5205100397561939',
  standalone: true,
  templateUrl: './app-5205100397561939.component.html',
  styleUrl: './app-5205100397561939.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5205100397561939Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
