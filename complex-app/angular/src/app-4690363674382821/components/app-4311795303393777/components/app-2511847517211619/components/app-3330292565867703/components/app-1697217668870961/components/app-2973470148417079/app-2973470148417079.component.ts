import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2973470148417079',
  standalone: true,
  templateUrl: './app-2973470148417079.component.html',
  styleUrl: './app-2973470148417079.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2973470148417079Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
