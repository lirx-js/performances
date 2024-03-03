import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6106391848534841',
  standalone: true,
  templateUrl: './app-6106391848534841.component.html',
  styleUrl: './app-6106391848534841.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6106391848534841Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
