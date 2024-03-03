import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8532817669956211',
  standalone: true,
  templateUrl: './app-8532817669956211.component.html',
  styleUrl: './app-8532817669956211.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8532817669956211Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
