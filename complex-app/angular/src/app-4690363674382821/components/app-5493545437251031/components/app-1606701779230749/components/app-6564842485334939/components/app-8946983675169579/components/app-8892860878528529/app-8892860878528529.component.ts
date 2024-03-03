import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8892860878528529',
  standalone: true,
  templateUrl: './app-8892860878528529.component.html',
  styleUrl: './app-8892860878528529.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8892860878528529Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
