import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5849704650264973',
  standalone: true,
  templateUrl: './app-5849704650264973.component.html',
  styleUrl: './app-5849704650264973.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5849704650264973Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
