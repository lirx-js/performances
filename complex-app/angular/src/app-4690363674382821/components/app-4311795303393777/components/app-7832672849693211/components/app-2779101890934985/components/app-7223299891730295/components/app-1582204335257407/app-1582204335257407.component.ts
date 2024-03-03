import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1582204335257407',
  standalone: true,
  templateUrl: './app-1582204335257407.component.html',
  styleUrl: './app-1582204335257407.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1582204335257407Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
