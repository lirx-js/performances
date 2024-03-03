import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-342764384876039',
  standalone: true,
  templateUrl: './app-342764384876039.component.html',
  styleUrl: './app-342764384876039.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App342764384876039Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
