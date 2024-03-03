import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8552617007283497',
  standalone: true,
  templateUrl: './app-8552617007283497.component.html',
  styleUrl: './app-8552617007283497.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8552617007283497Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
