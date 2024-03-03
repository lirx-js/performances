import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-601518783812867',
  standalone: true,
  templateUrl: './app-601518783812867.component.html',
  styleUrl: './app-601518783812867.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App601518783812867Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
