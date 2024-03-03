import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7063468891023563',
  standalone: true,
  templateUrl: './app-7063468891023563.component.html',
  styleUrl: './app-7063468891023563.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7063468891023563Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
