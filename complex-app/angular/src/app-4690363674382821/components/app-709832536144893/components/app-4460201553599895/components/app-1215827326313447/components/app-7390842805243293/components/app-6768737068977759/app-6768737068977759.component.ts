import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6768737068977759',
  standalone: true,
  templateUrl: './app-6768737068977759.component.html',
  styleUrl: './app-6768737068977759.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6768737068977759Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
