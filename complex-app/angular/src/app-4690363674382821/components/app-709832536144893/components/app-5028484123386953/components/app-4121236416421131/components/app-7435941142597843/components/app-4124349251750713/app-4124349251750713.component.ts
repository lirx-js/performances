import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4124349251750713',
  standalone: true,
  templateUrl: './app-4124349251750713.component.html',
  styleUrl: './app-4124349251750713.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4124349251750713Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
