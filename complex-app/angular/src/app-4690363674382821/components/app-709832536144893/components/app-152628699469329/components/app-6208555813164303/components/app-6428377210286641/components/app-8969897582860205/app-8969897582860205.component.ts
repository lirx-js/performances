import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8969897582860205',
  standalone: true,
  templateUrl: './app-8969897582860205.component.html',
  styleUrl: './app-8969897582860205.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8969897582860205Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
