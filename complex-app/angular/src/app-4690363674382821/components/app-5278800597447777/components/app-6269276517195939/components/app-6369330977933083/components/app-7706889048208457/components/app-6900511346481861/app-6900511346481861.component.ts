import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6900511346481861',
  standalone: true,
  templateUrl: './app-6900511346481861.component.html',
  styleUrl: './app-6900511346481861.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6900511346481861Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
