import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6014048670479925',
  standalone: true,
  templateUrl: './app-6014048670479925.component.html',
  styleUrl: './app-6014048670479925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6014048670479925Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
