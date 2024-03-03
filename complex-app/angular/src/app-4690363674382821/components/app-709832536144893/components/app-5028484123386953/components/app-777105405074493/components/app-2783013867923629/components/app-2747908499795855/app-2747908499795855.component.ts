import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2747908499795855',
  standalone: true,
  templateUrl: './app-2747908499795855.component.html',
  styleUrl: './app-2747908499795855.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2747908499795855Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
