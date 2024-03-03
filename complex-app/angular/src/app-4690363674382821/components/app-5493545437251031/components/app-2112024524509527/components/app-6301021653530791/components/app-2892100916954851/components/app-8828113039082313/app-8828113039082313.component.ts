import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8828113039082313',
  standalone: true,
  templateUrl: './app-8828113039082313.component.html',
  styleUrl: './app-8828113039082313.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8828113039082313Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
