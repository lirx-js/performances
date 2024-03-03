import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8080738669594759',
  standalone: true,
  templateUrl: './app-8080738669594759.component.html',
  styleUrl: './app-8080738669594759.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8080738669594759Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
