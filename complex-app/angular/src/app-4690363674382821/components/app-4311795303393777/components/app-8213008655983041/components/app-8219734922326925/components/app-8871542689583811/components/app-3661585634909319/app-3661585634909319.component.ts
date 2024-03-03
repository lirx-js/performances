import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3661585634909319',
  standalone: true,
  templateUrl: './app-3661585634909319.component.html',
  styleUrl: './app-3661585634909319.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3661585634909319Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
