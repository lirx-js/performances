import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5461924336325627',
  standalone: true,
  templateUrl: './app-5461924336325627.component.html',
  styleUrl: './app-5461924336325627.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5461924336325627Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
