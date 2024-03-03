import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2010750418896695',
  standalone: true,
  templateUrl: './app-2010750418896695.component.html',
  styleUrl: './app-2010750418896695.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2010750418896695Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
