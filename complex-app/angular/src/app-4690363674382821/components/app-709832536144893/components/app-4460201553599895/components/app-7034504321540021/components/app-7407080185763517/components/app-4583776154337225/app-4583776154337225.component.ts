import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4583776154337225',
  standalone: true,
  templateUrl: './app-4583776154337225.component.html',
  styleUrl: './app-4583776154337225.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4583776154337225Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
