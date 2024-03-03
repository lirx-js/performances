import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4391482999600709',
  standalone: true,
  templateUrl: './app-4391482999600709.component.html',
  styleUrl: './app-4391482999600709.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4391482999600709Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
