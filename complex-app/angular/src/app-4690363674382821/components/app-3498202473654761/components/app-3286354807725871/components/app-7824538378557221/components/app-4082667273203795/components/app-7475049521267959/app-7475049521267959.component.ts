import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7475049521267959',
  standalone: true,
  templateUrl: './app-7475049521267959.component.html',
  styleUrl: './app-7475049521267959.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7475049521267959Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
