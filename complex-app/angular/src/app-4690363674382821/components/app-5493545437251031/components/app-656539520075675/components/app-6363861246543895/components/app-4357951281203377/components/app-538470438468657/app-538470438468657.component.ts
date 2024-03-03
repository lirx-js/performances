import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-538470438468657',
  standalone: true,
  templateUrl: './app-538470438468657.component.html',
  styleUrl: './app-538470438468657.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App538470438468657Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
