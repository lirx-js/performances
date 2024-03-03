import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7446840109635745',
  standalone: true,
  templateUrl: './app-7446840109635745.component.html',
  styleUrl: './app-7446840109635745.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7446840109635745Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
