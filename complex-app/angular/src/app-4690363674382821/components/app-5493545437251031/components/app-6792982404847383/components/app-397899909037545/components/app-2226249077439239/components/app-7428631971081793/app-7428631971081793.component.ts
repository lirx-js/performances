import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7428631971081793',
  standalone: true,
  templateUrl: './app-7428631971081793.component.html',
  styleUrl: './app-7428631971081793.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7428631971081793Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
