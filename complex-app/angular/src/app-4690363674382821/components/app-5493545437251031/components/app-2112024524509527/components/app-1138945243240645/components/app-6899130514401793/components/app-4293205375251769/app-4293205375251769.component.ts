import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4293205375251769',
  standalone: true,
  templateUrl: './app-4293205375251769.component.html',
  styleUrl: './app-4293205375251769.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4293205375251769Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
