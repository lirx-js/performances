import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8620904347960427',
  standalone: true,
  templateUrl: './app-8620904347960427.component.html',
  styleUrl: './app-8620904347960427.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8620904347960427Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
