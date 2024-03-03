import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2771039695693023',
  standalone: true,
  templateUrl: './app-2771039695693023.component.html',
  styleUrl: './app-2771039695693023.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2771039695693023Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
