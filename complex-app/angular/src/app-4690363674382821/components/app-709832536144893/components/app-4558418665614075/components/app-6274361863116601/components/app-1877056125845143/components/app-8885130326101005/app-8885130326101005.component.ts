import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8885130326101005',
  standalone: true,
  templateUrl: './app-8885130326101005.component.html',
  styleUrl: './app-8885130326101005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8885130326101005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
