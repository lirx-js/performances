import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2002797792315149',
  standalone: true,
  templateUrl: './app-2002797792315149.component.html',
  styleUrl: './app-2002797792315149.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2002797792315149Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
