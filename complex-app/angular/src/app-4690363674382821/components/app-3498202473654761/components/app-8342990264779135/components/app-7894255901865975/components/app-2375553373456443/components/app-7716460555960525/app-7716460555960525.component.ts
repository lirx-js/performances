import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7716460555960525',
  standalone: true,
  templateUrl: './app-7716460555960525.component.html',
  styleUrl: './app-7716460555960525.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7716460555960525Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
