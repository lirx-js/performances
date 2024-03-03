import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2396055947741187',
  standalone: true,
  templateUrl: './app-2396055947741187.component.html',
  styleUrl: './app-2396055947741187.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2396055947741187Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
