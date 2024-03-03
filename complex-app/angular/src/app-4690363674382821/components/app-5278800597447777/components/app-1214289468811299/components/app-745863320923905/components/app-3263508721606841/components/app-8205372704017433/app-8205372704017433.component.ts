import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8205372704017433',
  standalone: true,
  templateUrl: './app-8205372704017433.component.html',
  styleUrl: './app-8205372704017433.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8205372704017433Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
