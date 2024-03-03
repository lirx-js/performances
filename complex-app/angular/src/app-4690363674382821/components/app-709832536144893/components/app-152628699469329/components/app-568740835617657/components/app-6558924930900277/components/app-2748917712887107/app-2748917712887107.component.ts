import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2748917712887107',
  standalone: true,
  templateUrl: './app-2748917712887107.component.html',
  styleUrl: './app-2748917712887107.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2748917712887107Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
