import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5686086050665681',
  standalone: true,
  templateUrl: './app-5686086050665681.component.html',
  styleUrl: './app-5686086050665681.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5686086050665681Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
