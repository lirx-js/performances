import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1801402947204773',
  standalone: true,
  templateUrl: './app-1801402947204773.component.html',
  styleUrl: './app-1801402947204773.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1801402947204773Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
