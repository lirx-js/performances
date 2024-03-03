import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1618131308812099',
  standalone: true,
  templateUrl: './app-1618131308812099.component.html',
  styleUrl: './app-1618131308812099.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1618131308812099Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
