import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1087193739166669',
  standalone: true,
  templateUrl: './app-1087193739166669.component.html',
  styleUrl: './app-1087193739166669.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1087193739166669Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
