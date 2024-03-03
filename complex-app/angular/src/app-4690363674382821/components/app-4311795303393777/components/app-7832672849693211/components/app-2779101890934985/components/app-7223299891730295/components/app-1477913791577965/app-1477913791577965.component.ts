import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1477913791577965',
  standalone: true,
  templateUrl: './app-1477913791577965.component.html',
  styleUrl: './app-1477913791577965.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1477913791577965Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
