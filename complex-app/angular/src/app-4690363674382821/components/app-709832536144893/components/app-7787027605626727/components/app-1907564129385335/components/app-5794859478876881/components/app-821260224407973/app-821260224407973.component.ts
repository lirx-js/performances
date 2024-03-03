import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-821260224407973',
  standalone: true,
  templateUrl: './app-821260224407973.component.html',
  styleUrl: './app-821260224407973.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App821260224407973Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
