import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4353597643501315',
  standalone: true,
  templateUrl: './app-4353597643501315.component.html',
  styleUrl: './app-4353597643501315.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4353597643501315Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
