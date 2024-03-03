import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-963610476828927',
  standalone: true,
  templateUrl: './app-963610476828927.component.html',
  styleUrl: './app-963610476828927.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App963610476828927Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
