import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2451737355467469',
  standalone: true,
  templateUrl: './app-2451737355467469.component.html',
  styleUrl: './app-2451737355467469.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2451737355467469Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
