import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5002303751216137',
  standalone: true,
  templateUrl: './app-5002303751216137.component.html',
  styleUrl: './app-5002303751216137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5002303751216137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
