import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1673500264901673',
  standalone: true,
  templateUrl: './app-1673500264901673.component.html',
  styleUrl: './app-1673500264901673.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1673500264901673Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
