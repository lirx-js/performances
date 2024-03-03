import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7934670157229787',
  standalone: true,
  templateUrl: './app-7934670157229787.component.html',
  styleUrl: './app-7934670157229787.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7934670157229787Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
