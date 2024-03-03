import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-970265169858349',
  standalone: true,
  templateUrl: './app-970265169858349.component.html',
  styleUrl: './app-970265169858349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App970265169858349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
