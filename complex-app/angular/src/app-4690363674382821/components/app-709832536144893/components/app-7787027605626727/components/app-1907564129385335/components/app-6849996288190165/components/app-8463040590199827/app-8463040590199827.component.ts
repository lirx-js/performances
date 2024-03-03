import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8463040590199827',
  standalone: true,
  templateUrl: './app-8463040590199827.component.html',
  styleUrl: './app-8463040590199827.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8463040590199827Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
