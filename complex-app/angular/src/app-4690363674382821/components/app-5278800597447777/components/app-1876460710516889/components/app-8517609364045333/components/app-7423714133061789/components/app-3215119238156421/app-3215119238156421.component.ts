import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3215119238156421',
  standalone: true,
  templateUrl: './app-3215119238156421.component.html',
  styleUrl: './app-3215119238156421.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3215119238156421Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
