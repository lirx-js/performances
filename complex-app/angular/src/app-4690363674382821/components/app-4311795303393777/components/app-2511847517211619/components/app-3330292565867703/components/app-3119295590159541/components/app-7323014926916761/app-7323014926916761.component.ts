import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7323014926916761',
  standalone: true,
  templateUrl: './app-7323014926916761.component.html',
  styleUrl: './app-7323014926916761.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7323014926916761Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
