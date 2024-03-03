import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2332642318293711',
  standalone: true,
  templateUrl: './app-2332642318293711.component.html',
  styleUrl: './app-2332642318293711.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2332642318293711Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
