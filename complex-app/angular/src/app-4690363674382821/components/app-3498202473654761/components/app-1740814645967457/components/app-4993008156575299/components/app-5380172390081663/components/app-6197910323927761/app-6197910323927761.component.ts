import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6197910323927761',
  standalone: true,
  templateUrl: './app-6197910323927761.component.html',
  styleUrl: './app-6197910323927761.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6197910323927761Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
