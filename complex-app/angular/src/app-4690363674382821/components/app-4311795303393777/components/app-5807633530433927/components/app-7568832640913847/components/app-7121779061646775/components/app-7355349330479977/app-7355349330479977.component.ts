import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7355349330479977',
  standalone: true,
  templateUrl: './app-7355349330479977.component.html',
  styleUrl: './app-7355349330479977.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7355349330479977Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
