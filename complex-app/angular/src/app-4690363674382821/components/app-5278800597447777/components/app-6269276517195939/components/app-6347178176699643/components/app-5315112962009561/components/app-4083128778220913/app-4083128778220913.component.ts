import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4083128778220913',
  standalone: true,
  templateUrl: './app-4083128778220913.component.html',
  styleUrl: './app-4083128778220913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4083128778220913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
