import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5851629492675237',
  standalone: true,
  templateUrl: './app-5851629492675237.component.html',
  styleUrl: './app-5851629492675237.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5851629492675237Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
