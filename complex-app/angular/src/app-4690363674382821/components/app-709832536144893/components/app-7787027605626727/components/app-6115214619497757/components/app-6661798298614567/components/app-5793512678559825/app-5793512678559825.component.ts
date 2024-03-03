import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5793512678559825',
  standalone: true,
  templateUrl: './app-5793512678559825.component.html',
  styleUrl: './app-5793512678559825.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5793512678559825Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
