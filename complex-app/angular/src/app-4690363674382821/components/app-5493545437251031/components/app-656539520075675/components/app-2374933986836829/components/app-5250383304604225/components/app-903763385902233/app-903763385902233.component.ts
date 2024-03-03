import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-903763385902233',
  standalone: true,
  templateUrl: './app-903763385902233.component.html',
  styleUrl: './app-903763385902233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App903763385902233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
