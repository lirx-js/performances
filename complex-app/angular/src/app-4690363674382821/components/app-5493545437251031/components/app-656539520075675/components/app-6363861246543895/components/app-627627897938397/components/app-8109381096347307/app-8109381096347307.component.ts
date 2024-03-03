import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8109381096347307',
  standalone: true,
  templateUrl: './app-8109381096347307.component.html',
  styleUrl: './app-8109381096347307.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8109381096347307Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
