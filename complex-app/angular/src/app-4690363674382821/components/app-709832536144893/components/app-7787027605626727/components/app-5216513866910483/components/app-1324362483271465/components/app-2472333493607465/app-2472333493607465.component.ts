import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2472333493607465',
  standalone: true,
  templateUrl: './app-2472333493607465.component.html',
  styleUrl: './app-2472333493607465.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2472333493607465Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
