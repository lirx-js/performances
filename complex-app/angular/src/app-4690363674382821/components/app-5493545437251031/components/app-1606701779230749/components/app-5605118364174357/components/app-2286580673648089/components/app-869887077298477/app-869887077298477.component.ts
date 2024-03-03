import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-869887077298477',
  standalone: true,
  templateUrl: './app-869887077298477.component.html',
  styleUrl: './app-869887077298477.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App869887077298477Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
