import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6889894750684421',
  standalone: true,
  templateUrl: './app-6889894750684421.component.html',
  styleUrl: './app-6889894750684421.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6889894750684421Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
