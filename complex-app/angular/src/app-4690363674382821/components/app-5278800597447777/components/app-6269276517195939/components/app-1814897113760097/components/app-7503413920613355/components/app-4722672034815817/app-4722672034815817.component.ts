import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4722672034815817',
  standalone: true,
  templateUrl: './app-4722672034815817.component.html',
  styleUrl: './app-4722672034815817.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4722672034815817Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
