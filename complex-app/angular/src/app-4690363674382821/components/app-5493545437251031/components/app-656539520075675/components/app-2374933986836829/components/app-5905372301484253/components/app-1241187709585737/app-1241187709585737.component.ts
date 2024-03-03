import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1241187709585737',
  standalone: true,
  templateUrl: './app-1241187709585737.component.html',
  styleUrl: './app-1241187709585737.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1241187709585737Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
