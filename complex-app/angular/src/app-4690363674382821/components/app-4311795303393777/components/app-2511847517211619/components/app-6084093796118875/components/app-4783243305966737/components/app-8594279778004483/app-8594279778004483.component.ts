import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8594279778004483',
  standalone: true,
  templateUrl: './app-8594279778004483.component.html',
  styleUrl: './app-8594279778004483.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8594279778004483Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
