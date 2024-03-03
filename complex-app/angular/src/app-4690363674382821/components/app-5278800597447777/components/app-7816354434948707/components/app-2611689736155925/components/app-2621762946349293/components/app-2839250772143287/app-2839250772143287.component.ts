import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2839250772143287',
  standalone: true,
  templateUrl: './app-2839250772143287.component.html',
  styleUrl: './app-2839250772143287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2839250772143287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
