import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7088829396984267',
  standalone: true,
  templateUrl: './app-7088829396984267.component.html',
  styleUrl: './app-7088829396984267.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7088829396984267Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
