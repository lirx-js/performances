import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4387446642712675',
  standalone: true,
  templateUrl: './app-4387446642712675.component.html',
  styleUrl: './app-4387446642712675.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4387446642712675Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
