import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3600619378022713',
  standalone: true,
  templateUrl: './app-3600619378022713.component.html',
  styleUrl: './app-3600619378022713.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3600619378022713Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
