import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5697914555461773',
  standalone: true,
  templateUrl: './app-5697914555461773.component.html',
  styleUrl: './app-5697914555461773.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5697914555461773Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
