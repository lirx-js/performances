import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3317155165881589',
  standalone: true,
  templateUrl: './app-3317155165881589.component.html',
  styleUrl: './app-3317155165881589.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3317155165881589Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
