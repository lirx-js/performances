import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8761255538044759',
  standalone: true,
  templateUrl: './app-8761255538044759.component.html',
  styleUrl: './app-8761255538044759.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8761255538044759Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
