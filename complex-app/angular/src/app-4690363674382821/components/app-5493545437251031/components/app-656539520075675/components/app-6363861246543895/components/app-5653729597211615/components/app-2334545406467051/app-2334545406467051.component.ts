import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2334545406467051',
  standalone: true,
  templateUrl: './app-2334545406467051.component.html',
  styleUrl: './app-2334545406467051.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2334545406467051Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
