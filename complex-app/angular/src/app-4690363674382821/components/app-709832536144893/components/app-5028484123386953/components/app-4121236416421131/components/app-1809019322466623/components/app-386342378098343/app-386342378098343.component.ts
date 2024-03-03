import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-386342378098343',
  standalone: true,
  templateUrl: './app-386342378098343.component.html',
  styleUrl: './app-386342378098343.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App386342378098343Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
