import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4927541756118541',
  standalone: true,
  templateUrl: './app-4927541756118541.component.html',
  styleUrl: './app-4927541756118541.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4927541756118541Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
