import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3990521113417643',
  standalone: true,
  templateUrl: './app-3990521113417643.component.html',
  styleUrl: './app-3990521113417643.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3990521113417643Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
