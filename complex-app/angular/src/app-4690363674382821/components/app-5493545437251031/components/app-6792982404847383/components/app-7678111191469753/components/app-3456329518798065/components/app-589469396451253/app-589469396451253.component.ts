import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-589469396451253',
  standalone: true,
  templateUrl: './app-589469396451253.component.html',
  styleUrl: './app-589469396451253.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App589469396451253Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
