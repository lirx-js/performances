import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4494104882806999',
  standalone: true,
  templateUrl: './app-4494104882806999.component.html',
  styleUrl: './app-4494104882806999.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4494104882806999Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
