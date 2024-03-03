import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4299817920225233',
  standalone: true,
  templateUrl: './app-4299817920225233.component.html',
  styleUrl: './app-4299817920225233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4299817920225233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
