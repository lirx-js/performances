import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2409820267391819',
  standalone: true,
  templateUrl: './app-2409820267391819.component.html',
  styleUrl: './app-2409820267391819.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2409820267391819Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
