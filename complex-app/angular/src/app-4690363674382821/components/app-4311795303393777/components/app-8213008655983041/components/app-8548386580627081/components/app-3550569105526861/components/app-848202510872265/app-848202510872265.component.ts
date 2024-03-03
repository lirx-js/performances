import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-848202510872265',
  standalone: true,
  templateUrl: './app-848202510872265.component.html',
  styleUrl: './app-848202510872265.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App848202510872265Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
