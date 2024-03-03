import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3381125680366817',
  standalone: true,
  templateUrl: './app-3381125680366817.component.html',
  styleUrl: './app-3381125680366817.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3381125680366817Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
