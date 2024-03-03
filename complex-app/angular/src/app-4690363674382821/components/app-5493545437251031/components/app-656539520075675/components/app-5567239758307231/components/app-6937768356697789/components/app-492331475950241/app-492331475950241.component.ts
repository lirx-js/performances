import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-492331475950241',
  standalone: true,
  templateUrl: './app-492331475950241.component.html',
  styleUrl: './app-492331475950241.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App492331475950241Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
