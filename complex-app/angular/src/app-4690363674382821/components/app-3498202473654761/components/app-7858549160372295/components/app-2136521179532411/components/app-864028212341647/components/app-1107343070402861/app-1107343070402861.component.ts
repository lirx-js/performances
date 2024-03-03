import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1107343070402861',
  standalone: true,
  templateUrl: './app-1107343070402861.component.html',
  styleUrl: './app-1107343070402861.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1107343070402861Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
