import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7330044079196031',
  standalone: true,
  templateUrl: './app-7330044079196031.component.html',
  styleUrl: './app-7330044079196031.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7330044079196031Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
