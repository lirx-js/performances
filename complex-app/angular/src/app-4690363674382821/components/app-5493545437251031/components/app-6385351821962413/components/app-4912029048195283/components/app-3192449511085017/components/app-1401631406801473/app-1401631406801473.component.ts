import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1401631406801473',
  standalone: true,
  templateUrl: './app-1401631406801473.component.html',
  styleUrl: './app-1401631406801473.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1401631406801473Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
