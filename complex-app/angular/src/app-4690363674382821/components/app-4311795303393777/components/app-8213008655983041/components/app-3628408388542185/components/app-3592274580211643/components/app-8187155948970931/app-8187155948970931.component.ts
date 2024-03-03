import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8187155948970931',
  standalone: true,
  templateUrl: './app-8187155948970931.component.html',
  styleUrl: './app-8187155948970931.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8187155948970931Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
