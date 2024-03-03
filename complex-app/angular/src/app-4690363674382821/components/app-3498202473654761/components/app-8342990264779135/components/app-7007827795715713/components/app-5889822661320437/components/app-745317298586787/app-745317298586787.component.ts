import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-745317298586787',
  standalone: true,
  templateUrl: './app-745317298586787.component.html',
  styleUrl: './app-745317298586787.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App745317298586787Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
