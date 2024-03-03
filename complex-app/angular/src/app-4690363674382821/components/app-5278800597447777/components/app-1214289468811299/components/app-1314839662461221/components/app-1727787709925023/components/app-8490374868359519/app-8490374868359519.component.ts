import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8490374868359519',
  standalone: true,
  templateUrl: './app-8490374868359519.component.html',
  styleUrl: './app-8490374868359519.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8490374868359519Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
