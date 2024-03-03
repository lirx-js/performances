import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-942506864505377',
  standalone: true,
  templateUrl: './app-942506864505377.component.html',
  styleUrl: './app-942506864505377.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App942506864505377Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
