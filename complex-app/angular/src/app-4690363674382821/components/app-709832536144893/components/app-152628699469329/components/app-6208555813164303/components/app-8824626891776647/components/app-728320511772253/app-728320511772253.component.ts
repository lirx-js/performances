import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-728320511772253',
  standalone: true,
  templateUrl: './app-728320511772253.component.html',
  styleUrl: './app-728320511772253.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App728320511772253Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
