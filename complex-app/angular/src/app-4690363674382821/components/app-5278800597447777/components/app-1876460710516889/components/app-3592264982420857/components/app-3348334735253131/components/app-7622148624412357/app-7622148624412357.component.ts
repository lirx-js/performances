import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7622148624412357',
  standalone: true,
  templateUrl: './app-7622148624412357.component.html',
  styleUrl: './app-7622148624412357.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7622148624412357Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
