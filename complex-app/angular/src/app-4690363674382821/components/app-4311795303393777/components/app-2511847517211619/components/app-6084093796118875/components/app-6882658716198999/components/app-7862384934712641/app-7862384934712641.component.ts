import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7862384934712641',
  standalone: true,
  templateUrl: './app-7862384934712641.component.html',
  styleUrl: './app-7862384934712641.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7862384934712641Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
