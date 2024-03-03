import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1130591007255805',
  standalone: true,
  templateUrl: './app-1130591007255805.component.html',
  styleUrl: './app-1130591007255805.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1130591007255805Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
